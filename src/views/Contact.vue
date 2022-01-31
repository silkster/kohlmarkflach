<script>
import AppContent from '@/components/Content/Content.vue';
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import bannerJpg from '@/assets/banners/contact.jpg';
import BaseInput from '@/components/BaseInput/BaseInput';
import BaseTextarea from '@/components/BaseTextarea/BaseTextarea';
import config from '@/config';
import { VueRecaptcha } from 'vue-recaptcha';

const { api, recaptcha } = config;

export default {
  name: 'Contact',
  components: {
    AppContent,
    AppButton,
    AppSlider,
    BaseInput,
    BaseTextarea,
    VueRecaptcha,
  },
  data() {
    return {
      photos: [bannerJpg],
      ratioInfo: {
        height: 700,
        width: 1920,
      },
      name: '',
      email: '',
      phone: '',
      message: '',
      isSuccess: false,
      isError: false,
      errorMessage: '',
      disableSubmitButton: false,
    };
  },
  computed: {
    recaptchaKey() {
      return recaptcha.key;
    },
  },
  methods: {
    submit: function () {
      console.log('start captcha');
      this.$refs.recaptcha.execute();
    },
    sendMessage(recaptchaToken) {
      const vm = this;
      const { name, email, phone, message } = vm;

      vm.disableSubmitButton = true;

      // We use JSON.stringify here so the data can be sent as a string via HTTP
      const body = JSON.stringify({
        name,
        email,
        phone,
        message,
        recaptchaToken,
      });
      const requestOptions = {
        method: 'POST',
        body,
      };

      fetch(api.contact.url, requestOptions)
        .then((response) => {
          console.log('fetch response', response);

          if (!response.ok) throw new Error('Error in fetch');
          console.log('raw', response);
          return response.json();
        })
        .then((response) => {
          console.log('parsed', response);
          vm.isSuccess = true;
        })
        .catch((error) => {
          console.log('captach error', error);

          vm.isError = true;
          vm.errorMessage = error.message;
        });
    },
    resetForm() {
      this.isSuccess = false;
      this.isError = false;
      this.disableSubmitButton = false;
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
      this.$refs.recaptcha.reset();
    },
    onCaptchaVerified: function (recaptchaToken) {
      const vm = this;
      vm.$refs.recaptcha.reset();
      vm.sendMessage(recaptchaToken);
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>

<template>
  <app-slider
    :nav-container-class="$style.sliderNavContainer"
    :photos="photos"
    :ratio-dimensions="ratioInfo"
  />
  <app-content :class="$style.content">
    <div :class="$style.container">
      <div :class="$style.contactInfo">
        <div :class="$style.addressLine1">12644 Chapel Road | Suite 209</div>
        <div :class="$style.city">Clifton | Virginia 20124</div>
        <div :class="$style.phone">703.932.2775</div>
      </div>
      <div :class="$style.form">
        <h1 :class="$style.containerHeading">Inquire</h1>

        <div v-if="isError" :class="$style.form">
          <h2>ERROR Sending Message</h2>
          <p>{ errorMessage }</p>
        </div>
        <div v-if="isSuccess" :class="$style.form">
          <h2>Success!</h2>
          <p>Your message has been sent to Kohmark Flach!</p>
          <p>
            <app-button @click="resetForm" label="reset" size="medium" />
          </p>
        </div>
        <form
          @submit.prevent="submit"
          v-if="!isSuccess"
          :class="$style.contactForm"
        >
          <div :class="$style.field">
            <base-input
              v-model="name"
              type="text"
              id="name"
              name="name"
              label="Name (required)"
            />
          </div>
          <div :class="$style.field">
            <base-input
              v-model="email"
              type="email"
              id="email"
              required
              label="Email (required)"
              :class="$style.fieldEmail"
            />
          </div>
          <div :class="$style.field">
            <base-input
              v-model="phone"
              type="tel"
              input-id="phone"
              name="phone"
              label="Phone"
              required
            />
          </div>
          <div :class="$style.field">
            <base-textarea
              v-model="message"
              id="message"
              name="message"
              label="Message"
              required
            />
          </div>
          <div :class="$style.buttonContainer">
            <app-button
              type="submit"
              size="large"
              label="Submit"
              :disabled="disableSubmitButton"
            />
          </div>
          <div :class="$style.field">
            <vue-recaptcha
              ref="recaptcha"
              @verify="onCaptchaVerified"
              @expired="onCaptchaExpired"
              size="invisible"
              :sitekey="recaptchaKey"
            >
            </vue-recaptcha>
          </div>
        </form>
      </div>
    </div>
  </app-content>
</template>

<style module>
.content {
  max-width: unset;
}
h1.containerHeading {
  margin-bottom: 34px;
}
.contactInfo {
  display: none;
}
.form {
  width: 100%;
}
.contactForm {
  position: relative;
}
.field,
.field input,
.field textarea {
  width: 100%;
  box-sizing: border-box;
}
.field input,
.field textarea {
  background-color: var(--white);
  border: none;
  border-radius: 0;
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  height: 42px;
  margin-bottom: 25px;
  max-width: 964px;
  outline: none;
}
.field textarea {
  height: 100px;
}
.buttonContainer {
  margin-bottom: 92px;
}
@media screen and (min-width: 768px) {
  .content {
    padding-right: 10.9375vw;
    padding-left: 10.9375vw;
  }
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8.3333vw;
    text-align: left;
  }
  h1.containerHeading {
    margin-top: 0;
    text-align: left;
    margin-bottom: 34px !important;
  }
  .contactInfo {
    display: flex;
    flex-direction: column;
    color: var(--gray-dark);
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 80px;
  }
  .addressLine1,
  .addressLine2,
  .city,
  .state,
  .phone {
    padding: 0;
    line-height: 1.5;
    letter-spacing: 1px;
    white-space: nowrap;
  }
  .phone {
    border-right: 0;
  }
}
@media screen and (min-width: 1920px) {
  .content {
    padding-right: 210px;
    padding-left: 210px;
  }
  .container {
    gap: 160px;
  }
  .field input,
  .field textarea {
    font-size: 24px;
  }
}
</style>
