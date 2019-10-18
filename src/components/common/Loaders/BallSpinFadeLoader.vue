<template>
  <div class="loader">
    <div class="loader-inner ball-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BallSpinFadeLoader",
};
</script>

<style scoped>
@-webkit-keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%);
}
.ball-spin-fade-loader {
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
}
.ball-spin-fade-loader > div:nth-child(1) {
  top: 25px;
  left: 0;
  -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
  animation: ball-spin-fade-loader 1s 0s infinite linear;
}
.ball-spin-fade-loader > div:nth-child(2) {
  top: 17.04545px;
  left: 17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
  animation: ball-spin-fade-loader 1s 0.12s infinite linear;
}
.ball-spin-fade-loader > div:nth-child(3) {
  top: 0;
  left: 25px;
  -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
  animation: ball-spin-fade-loader 1s 0.24s infinite linear;
}
.ball-spin-fade-loader > div:nth-child(4) {
  top: -17.04545px;
  left: 17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
  animation: ball-spin-fade-loader 1s 0.36s infinite linear;
}
.ball-spin-fade-loader > div:nth-child(5) {
  top: -25px;
  left: 0;
  -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
  animation: ball-spin-fade-loader 1s 0.48s infinite linear;
}
.ball-spin-fade-loader > div:nth-child(6) {
  top: -17.04545px;
  left: -17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
  animation: ball-spin-fade-loader 1s 0.6s infinite linear;
}
.ball-spin-fade-loader > div:nth-child(7) {
  top: 0;
  left: -25px;
  -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
  animation: ball-spin-fade-loader 1s 0.72s infinite linear;
}
.ball-spin-fade-loader > div:nth-child(8) {
  top: 17.04545px;
  left: -17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
  animation: ball-spin-fade-loader 1s 0.84s infinite linear;
}
.ball-spin-fade-loader > div {
  background-color: rgba(255, 126, 103, 0.95);
  width: 15px;
  height: 15px;
  border: 1.5px solid rgba(255, 255, 255, 1);
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
}
</style>