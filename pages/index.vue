<template lang="pug">
body.antialiased.bg-body.text-body.font-body
 div(class='')
  section.py-24.bg-coolGray-900(
   class='md:pt-32',
   style='background-image: url("flex-ui-assets/elements/pattern-dark.svg"); background-position: center'
  )
   .container.px-4.mx-auto
    .relative.max-w-xl.mx-auto.pt-14.pb-16.px-8.bg-white.rounded-2xl
     a.absolute.top-0.transform.inline-block(
      class='left-1/2 -translate-y-1/2 -translate-x-1/2',
      href='#'
     )
      img.h-16.rounded(src='images/LBU.png', alt='')
     .max-w-sm.mx-auto
      .mb-6.text-center
       h3.mb-4.text-2xl.font-bold(class='md:text-3xl') Management Information System
      form(action='')
       .mb-6
        label.block.mb-2.text-coolGray-800.font-medium(for='') Email
        input.appearance-none.block.w-full.p-3.leading-5.text-coolGray-900.border.border-coolGray-200.rounded-lg.shadow-md.placeholder-coolGray-400(
         class='focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
         type='email'
        )
       .mb-4
        label.block.mb-2.text-coolGray-800.font-medium(for='') Password
        input.appearance-none.block.w-full.p-3.leading-5.text-coolGray-900.border.border-coolGray-200.rounded-lg.shadow-md.placeholder-coolGray-400(
         class='focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
         type='password'
        )
       .flex.flex-wrap.items-center.justify-between.mb-6
        .w-full(class='md:w-1/2')
         label.relative.inline-flex.items-center
          input.form-checkbox.appearance-none(type='checkbox')
          img.absolute.transform.left-0(
           class='top-1/2 -translate-y-1/2',
           src='flex-ui-assets/elements/sign-up/checkbox-icon.svg',
           alt=''
          )
          span.ml-7.text-xs.text-coolGray-800.font-medium Remember me
        .w-full.mt-1(class='md:w-auto')
         a.inline-block.text-xs.font-medium.text-blue-500(
          class='hover:text-blue-600',
          href='#'
         ) Forgot your password?
       a.inline-block.py-3.px-7.mb-6.w-full.text-base.text-blue-50.font-medium.text-center.leading-6.bg-blue-500.rounded-md.shadow-sm(
        class='hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
        href='#'
       ) Sign In
       p.text-center
        span.text-xs.font-medium Don’t have an account?
        |
        a.inline-block.text-xs.font-medium.text-blue-500(
         class='hover:text-blue-600 hover:underline',
         href='#'
        ) Sign up
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 name: 'IndexPage',
})
</script>
