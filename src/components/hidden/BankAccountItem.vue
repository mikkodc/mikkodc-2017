<template>
  <div>
    <div class="col-half">
      <div class="bank-card">
        <div class="bank-card--top">
          <h2 class="bank-card--top--title">{{bankDetails.name}}</h2>
          <h3 class="bank-card--top--subtitle">{{bankDetails.sub}}</h3>
        </div>
        <div class="bank-card--bottom" v-if="bankDetails.type != ''">
          <VisaCardLogo v-show="bankDetails.type == 'visa'"/>
          <MasterCardLogo v-show="bankDetails.type == 'master'"/>
        </div>
      </div>
    </div>
    <div class="col-half">
      <div class="page-title">Card Information</div>
      <div class="card-info">
        <div class="card-info--label">Account Number</div>
        <div class="card-info--value">{{bankDetails.accountNum}}</div>
      </div>
      <div class="card-info" v-show="bankDetails.iban != ''">
        <div class="card-info--label">IBAN</div>
        <div class="card-info--value">{{bankDetails.iban}}</div>
      </div>
      <div class="card-info" v-show="bankDetails.swift != ''">
        <div class="card-info--label">Swift Code</div>
        <div class="card-info--value">{{bankDetails.swift}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import MasterCardLogo from '@/components/icons/MasterCardLogo'
import VisaCardLogo from '@/components/icons/VisaCardLogo'

export default {
  props: ['bankDetails'],
  components: {
    MasterCardLogo,
    VisaCardLogo
  }
}
</script>

<style lang="scss" scoped>
.bank-card {
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  min-height: 200px;
  padding: 28px 24px;
  margin-bottom: 40px;

  &--bottom {
    text-align: right;
  }

  &--top > * {
    font-weight: 800;
    color: #11625a;
    text-transform: uppercase;
    line-height: 1.2em;
    margin-bottom: 0;
  }

  &--top--title {
    font-size: 1.4em;
    margin: 0;
  }

  &--top--subtitle {
    font-size: 1em;
    margin: 0;
  }

  &--bottom svg {
    width: 65px;
  }
}

.card-info {
  margin-bottom: 25px;

  &--label {
    color: #a9a9a9;
  }

  &--value {
    color: #636363;
    font-size: 1.5em;
  }
}
</style>