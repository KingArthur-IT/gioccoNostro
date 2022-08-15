<template>
  <div class="filters-wrapper" v-if="marketData && marketData.length">
    <ul class="filter">
      <li class="filter__item"
          :class="{'active': typeGameSelectorValue === 'All'}"
          @click="typeGameSelectorValue = 'All'"
      >{{ $t('All') }}
      </li>
      <li class="filter__item"
          :class="{'active': typeGameSelectorValue === '3'}"
          @click="typeGameSelectorValue='3'"
      >3x3
      </li>
      <li class="filter__item"
          :class="{'active': typeGameSelectorValue === '4'}"
          @click="typeGameSelectorValue='4'"
      >4x4
      </li>
      <li class="filter__item"
          :class="{'active': typeGameSelectorValue === '5'}"
          @click="typeGameSelectorValue='5'"
      >5x5
      </li>
    </ul>
    <ul class="filter">
      <li class="filter__item"
          :class="{'active': priceGameSelectorValue === 'All'}"
          @click="priceGameSelectorValue='All'"
      >{{ $t('All') }}
      </li>
      <li class="filter__item"
          :class="{'active': priceGameSelectorValue === '100'}"
          @click="priceGameSelectorValue='100'"
      >€100
      </li>
      <li class="filter__item"
          :class="{'active': priceGameSelectorValue === '200'}"
          @click="priceGameSelectorValue='200'"
      >€200
      </li>
      <li class="filter__item"
          :class="{'active': priceGameSelectorValue === '300'}"
          @click="priceGameSelectorValue='300'"
      >€300
      </li>
    </ul>
  </div>
  <table v-if="marketData && marketData.length" class="table no-spacing" style="width: 100%">
    <colgroup>
      <col style="width: 10%;">
      <col style="width: 20%;">
      <col style="width: 15%;">
      <col style="width: 15%;">
      <col style="width: 15%;">
      <col style="width: 15%;">
    </colgroup>
    <tr class="table__head head-text">
      <th>
        <div class="table__head-cell">
          <span>ID</span>
        </div>
      </th>
      <th>
        <div class="table__head-cell">
          <span>{{ $t('Email') }}</span>
        </div>
      </th>
      <th>
        <div class="table__head-cell cell-pointer" @click="sortTableData('finished_games')">
          <span class="finished-games-td">{{ $t('finished_games') }}</span>
          <TableSortArrows :sortVal="sortVals.finished_games"/>
        </div>
      </th>
      <th>
        <div class="table__head-cell cell-pointer" @click="sortTableData('price_code')">
          <span>{{ $t('Price') }}</span>
          <TableSortArrows :sortVal="sortVals.price_code"/>
        </div>
      </th>
      <th>
        <div class="table__head-cell cell-pointer" @click="sortTableData('game_type')">
          <span>{{ $t('type_game') }}</span>
          <TableSortArrows :sortVal="sortVals.game_type"/>
        </div>
      </th>
      <th>
        <div class="table__head-cell table__head-center">
          <span>{{ $t('Buy') }}</span>
        </div>
      </th>
    </tr>
    <tr v-for="item in marketData" :key="item.id" class="table__body-row body-text">
      <td>{{ item.id }}</td>
      <td>{{ item.owner_email }}</td>
      <td>{{ item.finished_games }}</td>
      <td>€ {{ item.price_code }}</td>
      <td>{{ item.game_type_name }}</td>
      <td>
        <div class="mr-20">
          <CustomButton :text="$t('Buy')" @click="orderEvent(item.ident)"/>
        </div>
      </td>
    </tr>
  </table>
  <Pagination v-if="linksArray && linksArray.length"
              :currentPage="currentPage"
              :arrayLength="filteredMarketData.length"
              :linksArray="linksArray"
              @pageClicked="getMarketdata"
  />

  <BuyModal :isShown="isShowModal"
            @closeBuyModal="isShowModal = false"
            @PaymentEvent="paymentEvent"
            :gamePrice="orderGamePrice"
            :totalPrice="orderGameTotal"
            :gameIdent="orderGameIdent"
  />

  <transition name="modal">
    <CustomModal v-if="isShowAlertModal">
      <template v-slot:header>
        <div class="modal-header">
          <p class="alert-modal__text">{{ alertModalText }}</p>
        </div>
      </template>
      <template v-slot:footer>
        <CustomButton :isOutlined="true" :text="$t('OK')" @click="isShowAlertModal = false"/>
      </template>
    </CustomModal>
  </transition>
</template>

<script>
import CustomButton from '@/components/UIKit/CustomButton.vue'
import TableSortArrows from '@/components/UIKit/TableSortArrows.vue'
import Pagination from '@/components/Pagination.vue'
import BuyModal from '@/components/BuyModal.vue'
import CustomModal from '@/components/Modal.vue'
import HttpMixin from "../HttpMixin";
export default {
  mixins: [HttpMixin],
  components: {
    CustomButton,
    Pagination,
    TableSortArrows,
    BuyModal,
    CustomModal
  },
  data() {
    return {
      marketData: [],
      filteredMarketData: [],
      typeGameSelectorValue: 'All',
      priceGameSelectorValue: 'All',
      currentPage: 1,
      perPage: 10,
      linksArray: [],
      sortVals: {
        finished_games: null,
        price_code: null,
        game_type: null
      },
      isShowModal: false,
      isShowAlertModal: false,
      orderGamePrice: 0,
      orderGameTotal: 0,
      orderGameIdent: '',
      alertModalText: '',
      sortBy: null,
      sortDirection: null,
      filterBy: null,
      filterValue: null,
      currentUrl: ''

    }
  },
  mounted() {
    this.currentUrl = this.apiUrl + 'game/list';
    this.getMarketdata(this.currentUrl);
  },

  methods: {
    async getMarketdata(url, data={}){
      data['params'] = {};
      data['params']['page'] = this.currentPage;
      data['params']['sort_by'] = this.sortBy;
      data['params']['sort_dir'] = this.sortDirection;
      await this.sendRequest(url, data).then((response) => {
        if (response && response.status && response.data.status === 'success') {
          this.marketData = [...response.data.data.data];
          this.linksArray = [...response.data.data.links];
          this.currentPage = response.data.data.current_page;
        }
      })
          .catch((error) => {
            this.isShowAlertModal = true;
            this.alertModalText = error.message;
            console.log(error.message)
          });
    },

    sortTableData(field) {
      if (this.sortVals[field] === null) this.sortVals[field] = 1;
      this.sortVals[field] *= -1;
      this.sortBy = field;
      this.sortDirection = this.sortVals[field] > 0 ? 'desc' : 'asc';
      this.getMarketdata(this.currentUrl);
    },
    filtering() {
      let array = [...this.marketData];
      if (this.typeGameSelectorValue !== 'All')
        array = this.marketData.filter((item) => {
          return item.game_type.includes(this.typeGameSelectorValue)
        });
      if (this.priceGameSelectorValue !== 'All')
        return array.filter((item) => {
          return item.price_code == this.priceGameSelectorValue
        })
      else return array;
    },
    async orderEvent(ident) {
      await this.sendRequest('https://api.gioconostro.com/api/v1/game/buy',
          {
            ident: ident
          },
          'post')
          .then((response) => {
            if (response && response.data && response.data.status === 'success') {
              this.orderGamePrice = response.data.data.payment;
              this.orderGameTotal = response.data.data.total;
              this.orderGameIdent = ident;
              this.isShowModal = true;
            }
          })
          .catch((error) => {this.showErrorAlert(error)});
    },
    async paymentEvent(gameIdent) {
      await this.sendRequest('https://api.gioconostro.com/api/v1/game/order',
          {
            ident: gameIdent
          },
          'post')
          .then((response) => {
            if (response && response.data && response.data.status === 'success') {
              this.isShowModal = false;
              this.isShowAlertModal = true;
              this.alertModalText = 'Here will be redirect to payment system page. Now game just bought';
            }
          })
          .catch((error) => {this.showErrorAlert(error)});

    }
  },
  watch: {
    typeGameSelectorValue() {
      this.filteredMarketData = this.filtering();
    },
    priceGameSelectorValue() {
      this.filteredMarketData = this.filtering();
    },
    marketData() {
      this.filteredMarketData = [...this.marketData];
    }
  }
}
</script>

<style scoped>
.filters-wrapper {
  display: flex;
  margin-bottom: 33px;
  width: 100%;
}

.filter {
  padding: 0 50px;
  margin: 0;
  list-style: none;
  background: var(--section-background);
  border-radius: 20px;
  display: flex;
  flex-basis: 50%;
}

.filter:first-child {
  margin-right: 21px;
}

.filter__item {
  margin: 0;
  padding: 0;
  height: 64px;
  flex-basis: 25%;
  color: var(--gray-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.filter__item:nth-child(1),
.filter__item:nth-child(4) {
  flex-basis: 25%;
}

.filter__item.active {
  color: var(--primary-text-color);
  border-top: 2px solid var(--primary-button-color);
  border-bottom: 2px solid var(--primary-button-color);
}


.table__head-cell {
  display: flex;
  align-items: center;
}

.cell-pointer {
  cursor: pointer;
}

.table__head-center {
  justify-content: center;
}

th span {
  margin-right: 8px;
}

.table {
  width: 100%;
  background: var(--section-background);
  border-radius: 20px;
  position: relative;
}

.table__head {
  height: 60px;
  padding: 21px 0;
}

.head-text {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #FFFFFF;
  text-align: left;
}

.table__body-row {
  height: 60px;
  padding: 21px 0;
}

.table__body-row:nth-child(even) {
  background: var(--selected-background);
}

.body-text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: var(--gray-text-color);
}

th:first-child,
td:first-child {
  padding-left: 25px;
}

.no-spacing {
  border-spacing: 0;
  border-collapse: collapse;
}

.mr-20 {
  margin-right: 20px;
}

.alert-modal__text {
  text-align: center;
}

@media screen and (max-width: 1200px) {
  .finished-games-td {
    width: 60px;
  }
}

@media screen and (max-width: 750px) {
  .table {
    width: 698px !important;
    border-radius: 20px 20px 0 0;
  }

  .filters-wrapper {
    flex-direction: column;
  }

  .filter {
    flex-basis: 100%;
  }

  .filter:first-child {
    margin-right: 0px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 480px) {
  .filter {
    padding: 0 10px;
  }

  .filter__item:first-child {
    border-radius: 4px 0 0 4px;
  }

  .filter__item:last-child {
    border-radius: 0 4px 4px 0;
  }
}
</style>