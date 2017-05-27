<template>
  <div class="hello">
    <h2>Shop</h2>
    	<div class="mdl-card mdl-card-order mdl-shadow--8dp main">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">野菜登録</h2>
      </div>
    <div>
      <div class="mdl-card__supporting-text mdl-grid">
        <form action="#">
          <div>
            <p style="display:inline-block;">種別</p>
            <select name="blood" >
              <option value="A">A型</option>
              <option value="B">B型</option>
              <option value="O">O型</option>
              <option value="AB">AB型</option>
            </select>
          </div>
          <div>
            <p style="display:inline-block;">数量</p>
            <select name="blood" >
              <option value="A">A型</option>
              <option value="B">B型</option>
              <option value="O">O型</option>
              <option value="AB">AB型</option>
            </select>
          </div>
          <div>
            <p style="display:inline-block;">金額</p>
            <select name="blood" >
              <option value="A">A型</option>
              <option value="B">B型</option>
              <option value="O">O型</option>
              <option value="AB">AB型</option>
            </select>
          </div>
          <div>
            <p style="display:inline-block;">納期</p>
            <input type="text"></input>
          </div>
          <div>
            <p style="display:inline-block;">配送方法</p>
            <select name="blood" >
              <option value="A">A型</option>
              <option value="B">B型</option>
              <option value="O">O型</option>
              <option value="AB">AB型</option>
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
  </div>
</template>

<script src="./Shop.js"></script>

<style lang="scss" scoped src="./Shop.scss"></style>
<style lang="scss" scoped src="../css/material.min.css"></style>
