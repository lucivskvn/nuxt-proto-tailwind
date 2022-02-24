<template lang="pug">
body.antialiased.bg-body.text-body.font-body
 div(class='')
  section.relative.py-24.bg-coolGray-50(
   class='md:py-44 lg:py-64',
   style='background-image: url("flex-ui-assets/elements/pattern-dark2.svg"); background-position: center'
  )
   .relative.z-10.container.px-4.mx-auto
    .max-w-4xl.mx-auto.text-center
     span.inline-block.py-px.px-2.mb-4.text-xs.leading-5.text-blue-900.bg-blue-100.font-medium.rounded-full.shadow-sm Error 500
     h2.mb-4.text-4xl.leading-tight.text-white.font-bold.tracking-tighter(
      class='md:text-5xl'
     ) Page not found
     p.mb-12.text-lg.text-coolGray-400(class='md:text-xl') Something went wrong, so this page is broken.
     .flex.flex-wrap.justify-center
      .w-full.py-1(class='md:w-auto md:py-0 md:mr-6')
      .w-full.py-1(class='md:w-auto md:py-0')
       a.inline-block.py-5.px-7.w-full.text-base.leading-4.text-coolGray-100.font-medium.text-center.bg-coolGray-600.rounded-md.shadow-sm(
        class='md:text-lg hover:bg-coolGray-700 focus:ring-2 focus:ring-coolGray-700 focus:ring-opacity-50',
        href='#'
       ) Try Again
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
 name: 'ISEPage',
})
</script>
