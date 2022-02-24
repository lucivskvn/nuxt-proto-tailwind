<template lang="pug">
body.antialiased.bg-body.text-body.font-body
 div(class='')
  section.relative.py-24.bg-coolGray-900(
   class='md:py-44 lg:pt-56 lg:pb-72',
   style='background-image: url("flex-ui-assets/elements/pattern-dark2.svg"); background-position: center'
  )
   .relative.z-10.container.px-4.mx-auto
    .flex.flex-wrap
     .w-full(class='md:w-2/3')
      .mx-auto.text-center(class='md:max-w-xl md:text-left')
       span.text-6xl.text-blue-500.leading-tight.font-bold(class='md:text-7xl') 404
       h2.mb-4.text-4xl.leading-tight.text-white.font-bold.tracking-tighter(
        class='md:text-5xl'
       ) Page not found
       .flex.flex-wrap
        .w-full.py-1(class='md:w-auto md:py-0 md:mr-6')
         a.inline-block.py-5.px-7.w-full.text-base.leading-4.text-blue-50.font-medium.text-center.bg-blue-500.rounded-md.shadow-sm(
          class='md:text-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
          href='#'
         ) Go back to Homepage
        .w-full.py-1(class='md:w-auto md:py-0')
   img.absolute.top-0.left-0.w-28(
    class='md:w-auto',
    src='flex-ui-assets/elements/wave2-yellow.svg',
    alt=''
   )
   img.absolute.right-6.top-6.w-28(
    class='md:w-auto',
    src='flex-ui-assets/elements/dots3-green.svg',
    alt=''
   )
   img.absolute.right-0.bottom-0.w-28(
    class='md:w-auto',
    src='flex-ui-assets/elements/wave3-red.svg',
    alt=''
   )
   img.absolute.left-6.bottom-6.w-28(
    class='md:w-auto',
    src='flex-ui-assets/elements/dots3-violet.svg',
    alt=''
   )
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 name: 'PageNotFound',
})
</script>
