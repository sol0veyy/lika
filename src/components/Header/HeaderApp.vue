<script setup lang="ts">

</script>

<template>
  <header>
    <section>
      <img src="../../assets/img/logo.png" alt="logo">
    </section>
    <section>
      <p>г. Севастополь, ул. Яна Гамарника, д. 5</p>
      <a class="link-reset text__icons" href="tel:+7 (920) 873-57-33">
        <img src="../../assets/svg/phone.svg" alt="phone" width="30" height="30">
        +7 (920) 873-57-33
      </a>
      <p class="text__icons">
        <img src="../../assets/svg/telegram.svg" alt="phone" width="55" height="55">
        <img src="../../assets/svg/whatsapp.svg" alt="phone" width="55" height="55">
        <span>+7 (978) 585-89-25</span>
      </p>
      <p class="work__time">
        График работы: <br>
        с 9:00 до 20:00 <br>
        по предварительной записи
      </p>
    </section>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 369px;
    background-image: url('../../assets/img/header.png');
  }

  p {
    font-size: 24px;
    font-weight: 600;
  }

  .work__time {
    font-size: 17px;
  }

  .text__icons {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: right;
  }
  
  section:nth-last-child(1) {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .link-reset {
    font-size: 24px;
    font-weight: 600;
  }
</style>