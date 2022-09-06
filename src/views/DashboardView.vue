<template>
  <div class="dashboard">
    <div class="games" :class="{'games-hidden': !isGamesShown}">
      <div class="games__title">
        <span>{{ $t('your_games') }}</span>
        <div class="games__hide" @click="gamesShownToggle">{{ isGamesShown ? $t('Hide') : $t('Show') }}</div>
      </div>
      <div class="games__list">
        <div v-for="game in games" :key="game.id">
          <div @click="selectGame(game)" class="game__item"
               :class="{'selected-game': selectedGameRow[game.id]}">
            <span class="game__type">{{ game.game_type_name }}</span>
            <span class="game__price">€{{ game.price_code }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard__hero">
      <div class="dashboard__head">
        <div class="dashboard__head-wrapper">
          <div class="dashboard__head-item">
            <EarningIcon/>
            <div class="dashboard__item-content">
              <p class="dashboard__item-title">{{ $t('current_earning') }}:</p>
              <span class="dashboard__item-num">€{{ dashboardInfo.earning }}</span>
            </div>
          </div>
          <div class="dashboard__head-item">
            <OutputIcon/>
            <div class="dashboard__item-content">
              <p class="dashboard__item-title">{{ $t('next_output') }}:</p>
              <span class="dashboard__item-num">€{{ dashboardInfo.expected }}</span>
            </div>
          </div>
          <div class="dashboard__head-item">
            <GamesIcon/>
            <div class="dashboard__item-content">
              <p class="dashboard__item-title">{{ $t('complete_games') }}</p>
              <span class="dashboard__item-num">{{ dashboardInfo.finished }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isGamesShown && canGamesBeShown" class="dashboard__views">
        <SelectedGameDashboard :gameType="selectedGame?.game_type"
                               :gamePrice="selectedGame?.price_code"
                               :gameId="selectedGame?.id"
        />
      </div>
    </div>
  </div>
  <div v-if="!isGamesShown || (isGamesShown && !canGamesBeShown)" class="dashboard-view-full">
    <SelectedGameDashboard :gameType="selectedGame?.game_type"
                           :gamePrice="selectedGame?.price_code"
                           :gameId="selectedGame?.id"
                           :isFullScreenView="true"
    />
  </div>
</template>

<script>
import EarningIcon from '@/components/Icons/EarningIcon.vue'
import GamesIcon from '@/components/Icons/GamesIcon.vue'
import OutputIcon from '@/components/Icons/OutputIcon.vue'
import SelectedGameDashboard from '@/components/SelectedGameDashboard.vue'
import HttpMixin from "../HttpMixin";

export default {
  mixins: [HttpMixin],
  components: {
    EarningIcon, GamesIcon, OutputIcon,
    SelectedGameDashboard
  },
  data() {
    return {
      games: [],
      dashboardInfo: {
        earning: 0,
        expected: 0,
        finished: 0
      },
      isGamesShown: window.innerWidth > 1224 ? true : false,
      canGamesBeShown: true,
      selectedGameRow: {}
    }
  },
  created() {
    window.addEventListener('resize', this.resizeHandle);
  },
  mounted() {
    this.checkGamesMobileVisible();

    this.sendRequest(this.apiUrl + 'user/games')
        .then((response) => {
          if (response && response.statusText === 'OK') {
            this.games = [...response.data.page.data];
          }
        });

    this.sendRequest(this.apiUrl + 'user/dashboard')
        .then((response) => {
          if (response && response.statusText === 'OK') {
            this.dashboardInfo = Object.assign({}, response.data.data)
          }
        });

  },
  computed: {
    selectedGame() {
      return this.$store.state.selectedGame;
    }
  },
  methods: {
    gamesShownToggle() {
      this.isGamesShown = !this.isGamesShown;
      this.checkGamesMobileVisible();
    },
    selectGame(game) {
      for(let item in this.games){
        this.selectedGameRow[this.games[item].id] = false;
      }
      if (this.selectedGame === game) {
        this.setGameViewReady( false);
      } else {
        this.selectedGameRow[game.id] = true;
        this.findGame(game.id);
      }
    },
    checkGamesMobileVisible() {
      if (window.innerWidth < 1224) {
        this.canGamesBeShown = false;
      } else this.canGamesBeShown = true;
    },
    resizeHandle() {
      this.checkGamesMobileVisible();
      if (window.innerWidth < 1224)
        this.isGamesShown = false;
    }
  },
}
</script>

<style scoped>
.dashboard {
  display: flex;
}

.games {
  padding: 24px 20px 0 20px;
  border-radius: 20px;
  background: var(--section-background);
  min-width: 308px;
  /* max-height: calc(100vh - 80px - 26px); */
  margin-right: 23px;
  /* margin-bottom: 24px; */
}

.games__list {
  overflow-y: auto;
  max-height: calc(100vh - 80px - 26px - 90px);
  margin-bottom: 10px;
}

.games-hidden .games__list {
  max-height: 45px;
}

.games__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.games__title span {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: var(--primary-text-color);
}

.games__hide {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  text-decoration-line: underline;
  color: var(--gray-text-color);
  cursor: pointer;
}

.game__item {
  background: var(--selected-background);
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 5px;
  cursor: pointer;
}

.selected-game {
  background: var(--primary-button-color);
}

.game__type,
.game__price {
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 120%
}

.dashboard__hero {
  width: 100%;
}

.dashboard__head {
  margin-bottom: 24px;
  overflow-x: auto;
}

.dashboard__head-wrapper {
  display: flex;
}

.dashboard__head-item {
  height: 119px;
  background: var(--section-background);
  padding: 34px 20px;
  flex-basis: 33.3%;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  min-width: 230px;
}

.dashboard__head-item:last-child {
  margin-right: 0;
}

.dashboard__item-content {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.dashboard__item-title {
  margin: 0;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: var(--gray-text-color);
}

.dashboard__item-num {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: var(--primary-text-color);
}

.dashboard__views {
  width: 100%;
  background-color: var(--section-background);
  border-radius: 20px;
  min-height: calc(100vh - 80px - 26px - 119px - 26px);
  position: relative;
  /* overflow: scroll; */
}

.dashboard-view-full {
  width: 100%;
  background-color: var(--section-background);
  border-radius: 20px;
  height: 100vh;
  position: relative;
}

.games-hidden {
  max-height: 119px;
}

@media screen and (max-width: 1375px) {
  .dashboard__head {
    width: calc(100vw - 250px - 52px - 308px - 48px);
  }
}

@media screen and (max-width: 1020px) {
  .dashboard__head {
    width: calc(100vw - 193px - 52px - 308px - 48px);
  }
}

@media screen and (max-width: 860px) {
  .dashboard__head {
    width: calc(100vw - 52px - 308px - 24px);
  }
}

@media screen and (max-width: 600px) {
  .dashboard {
    flex-direction: column-reverse;
  }

  .dashboard__head {
    width: 100%;
  }

  .games {
    margin-right: 0;
  }
}
</style>