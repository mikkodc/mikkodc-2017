<template>
  <main class="container">
    <div class="row" v-for="(bank, i) in bankAccount" :key="i">
      <BankAccountItem :bankDetails="bank"></BankAccountItem>
      <div class="clearfix"></div>
      <hr>
    </div>
  </main>
</template>

<static-query>
query {
  metadata {
    bankAccount {
      name
      sub
      accountNum
      iban
      swift
      type
    }
  }
}
</static-query>

<script>
import BankAccountItem from '@/components/hidden/BankAccountItem'

export default {
  name: "BankAccount",
  computed: {
    meta: function() {
      return this.$static.metadata;
    },
    bankAccount: function() {
      return this.meta.bankAccount;
    },
  },
  components: {
    BankAccountItem
  }
};
</script>

<style scoped lang="scss">
</style>
