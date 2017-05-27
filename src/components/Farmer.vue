<template>
    <div class="hello">
    <h2>Farmer</h2>
    	<div class="mdl-card mdl-card-order mdl-shadow--8dp main">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">野菜登録</h2>
      </div>
      <p>出荷したい野菜を登録してください</p>
      <div class="mdl-card__supporting-text mdl-grid">
        <form action="#" class="form">
          <div>
            <p style="display:inline-block;">種別</p>
            <select name="blood" >
              <option value="A">レタス</option>
              <option value="B">キャベツ</option>
              <option value="O">きゅうり</option>
              <option value="AB">トマト</option>
            </select>
          </div>
          <div>
            <p style="display:inline-block;">数量</p>
            <select name="blood" >
              <option value="A">1</option>
              <option value="B">2</option>
              <option value="O">3</option>
              <option value="AB">4</option>
              <option value="AB">5</option>
            </select>
          </div>
          <div>
            <p style="display:inline-block;">金額</p>
            <select name="blood" >
              <option value="A">100</option>
              <option value="B">200</option>
              <option value="O">300</option>
              <option value="AB">400</option>
            </select>
          </div>
          <div class="mdl-card__actions mdl-cell--12-col send-button">
          <button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored" id="send">
              COMPLETE ORDER	
            </button>
          </div>
        </form>
      </div>
    </div>
	</div>
</template>

<script src="./Farmer.js"></script>

<style lang="scss" scoped src="./Farmer.scss"></style>
<style lang="scss" scoped src="../css/material.min.css"></style>
