<template>
  <div data-name="ac-shield" class="group relative mx-auto size-28 rounded-full outline outline-[#e1b970]/20 hover:outline-[#e1b970]/5 bg-black p-1 transition-all duration-300 hover:scale-125 hover:p-2">
    <div class="gradient-gold blend absolute left-0 top-0 z-10 flex size-full items-center justify-center rounded-full" />
    <div class="relative size-full rounded-full bg-gray-500 p-1">
      <div class="relative size-full rounded-full bg-black">
        <div class="relative   size-full overflow-hidden rounded-full opacity-50 invert">
          <div class="filigrana" />
        </div>
        <div class="absolute left-0 top-0 flex  size-full items-center justify-center text-neutral-500 transition-all duration-300 group-hover:scale-[80%] ">
          <ac-logo size="large" />
          <div class="absolute size-full animate-spin-slow">
            <ac-payoff class=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-0 transition-all delay-100 duration-200 group-hover:scale-[220%] group-hover:opacity-100 " />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ac-shield'
}
</script>
<style lang="scss" scoped>
.filigrana{
  position: absolute;
  border-radius: inherit;
  inset: 0px;
  background-size: 25px;
  background-image: url(https://framerusercontent.com/images/L9gN6bRCSKWIBJkYc7iGxMOn07w.svg);
  border: 0px;
  background-repeat: repeat;
  background-position: center center;
}
.blend{
  mix-blend-mode: overlay;
  overflow: hidden;
}
.gradient-gold{
  // @apply bg-primary;
  background: conic-gradient(from 0deg at 50% 50%, rgb(254, 229, 163) 0deg, #e1b970 90.8108deg, rgb(209, 161, 78) 115.217deg, rgb(255, 236, 162) 178.144deg, rgb(208, 140, 33) 217.297deg, rgb(255, 227, 164) 269.861deg, rgb(210, 159, 78) 308.425deg, rgb(254, 229, 163) 360deg);
}
</style>
