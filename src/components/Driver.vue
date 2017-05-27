<template>
  <div class="hello">
    <h2>Driver</h2>
    	<div class="mdl-card mdl-card-order mdl-shadow--8dp main">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">お店検索</h2>
      </div>
      <div class="check-button">
      <input type="checkbox" name="riyu" value="2">
        近くの店のみ
      </input>
      </div>
      <button @click="recommend" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored rec-button">
        検索
      </button>
    <div>
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">種別</th>
            <th>数量</th>
            <th>値段</th>
            <th>店名</th>
            <th>住所</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="!isRecommend">
          <tr>
            <td class="mdl-data-table__cell--non-numeric">キャベツ</td>
            <td>25</td>
            <td>290</td>
            <td>お店１</td>
            <td>東京都品川区</td>
            <td>
              <button @click="recommend" style="width:50px;" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored rec-button">
                申込
              </button>
            </td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">レタス</td>
            <td>50</td>
            <td>125</td>
            <td>お店２</td>
            <td>東京都中野区</td>
            <td>
              <button @click="recommend" style="width:50px;" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored rec-button">
                申込
              </button>
            </td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">トマト</td>
            <td>10</td>
            <td>235</td>
            <td>お店３</td>
            <td>東京都渋谷区</td>
            <td>
              <button @click="recommend" style="width:50px;" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored rec-button">
                申込
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">トマト</td>
            <td>10</td>
            <td>235</td>
            <td>お店３</td>
            <td>東京都渋谷区</td>
            <td>
              <button @click="recommend" style="width:50px;" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored rec-button">
                申込
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
	</div>
  </div>
</template>

<script src="./Driver.js"></script>

<style lang="scss" scoped src="./Driver.scss"></style>
<style lang="scss" scoped src="./material.min.css"></style>
