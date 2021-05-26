<template>
  <div class="w-full overflow-x-hidden sm:bg-green-300">
    <div class="grid lg:grid-cols-2 2xl:grid-cols-5">
      <div
        class="px-8 py-8 text-left max-w-md mx-auto sm:mx-w-xl lg:px-8 lg:py-16 lg:max-w-full xl:mr-0 2xl:col-span-2"
      >
        <img class="h-10" src="../assets/images/logo.svg" alt="logo" />
        <img
          class="mt-4 rounded-lg shadow-xl sm:mt-6 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
          src="../assets/images/beach-work.jpg"
          alt=""
        />
        <h1 class="mt-6 text-xl font-bold text-gray-900 sm:mt-8 sm:text-2xl">
          You can work from anywhere.
          <br class="hidden sm:inline" />
          <span class="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p class="mt-2 text-gray-600 text-sm sm:mt-4">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div class="mt-4">
          <a
            href="#"
            class="bg-indigo-500 px-5 py-3 inline-block text-white rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm"
            >Book your escape</a
          >
        </div>
      </div>
      <div class="hidden lg:block relative 2xl:col-span-3">
        <img
          class="absolute inset-0 w-full h-full object-cover object-center"
          src="../assets/images/beach-work.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less"></style>
