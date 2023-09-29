<template>
  <div id="app">
    <c-demo />
    <c-card imgSrc="1.jpg" summary="girl's summer" />
    <br />
    <c-card imgSrc="2.jpg" summary="they do love">

      <!-- 插槽，v-slot指定插入哪里 -->
      <template v-slot:footer>
        <div class="footer">
          <div class="time">2023.7.2 21:55</div>
          <div class="mood">heart jumping</div>
        </div>
      </template>
    </c-card>
    <br />
    <c-card imgSrc="3.jpg" :width="290" :imgHeight="60">
      <!-- 插槽没有取名时，会默认插入那个插槽，不需要模板 ，这个插入summary里的插槽-->
      女孩们音乐的舞动

      <template v-slot:footer>
        <div class="footer">
          <div class="footer-summer">
            <div class="time">2023.7.3 14:51</div>
            <div class="mood">lovely</div>
          </div>
        </div>
      </template>
    </c-card>


  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.time {
  color: #ccc;
  margin-top: 3px;
}

.mood {
  color: red;
  text-align: right;
}

.footer-summer {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
}
</style>
