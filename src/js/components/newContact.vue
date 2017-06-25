<template>
    <div>
    <form action="">
    <div class="toolbar">
      <div class="left toolbar__left" @click="$router.go(-1)">
        <span class="back-button" style="display: inline-block;">
          <span class="back-button__icon"></span>
            <span class="back-button__label">Back</span>
        </span>
      </div>
      <div class="center toolbar__center">
        New Contact
      </div>
      <div class="right toolbar__right">
        <span class="back-button" style="display: inline-block;">
          <!-- <span class="back-button__icon"></span> -->
            <span class="back-button__label" @click="create">Done</span>
        </span>
      </div>
    </div>

    <br><br>

    <ul class="list">
      <li class="list-item ">
        <div class="list-item__center ">
          <span class="icon-span">
             <i class="fa fa-user fa-2x list-item__icon"></i>
          </span>
        <input type="text" v-model="form.name" placeholder="Name" class="text-input width-90" >
        </div>
      </li>
      <li class="list-item " v-if="!showDetail">
        <div class="list-item__center ">
        <div class="add-more-details">
          <span><a class="plain-anchor" @click.prevent="form.withDetail = true">Add More Details</a></span>
        </div>
        </div>
      </li>
      
      <router-link to="accountforcontact">
        <li class="list-item " v-if="showDetail">
          <div class="list-item__center list-item--chevron">
          <span class="icon-span">
              <i class="fa fa-id-badge fa-2x list-item__icon"></i>
            </span>
            <input type="text" class="text-input width-90" placeholder="Choose Account" :value="account()">
          </div>
        </li>
      </router-link>
      
     </ul>

     <div v-if="showDetail">
     <div class="title">
          Phone
     </div>

     <ul class="list">
      <li class="list-item " v-for="(number, index) in form.numbers">
      <div class="list-item__left">
        <span class="icon-span">
              <span v-if="index === 0" class="fab fab--mini bg-green" @click="addNumber"><i class="zmdi zmdi-plus col-white"></i></span>
        </span>
      </div>
        <div class="list-item__center">
        
        <input type="number"  :placeholder="'Add Number ' + (1+index)" class="text-input width-90" v-model="form.numbers[index]">
        
        </div>
      </li>
      
      
     </ul>

     <div class="title">
          Email
     </div>

     <ul class="list">
      <li class="list-item " v-for="(email, index) in form.emails">
      <div class="list-item__left">
        <span class="icon-span">
              <span v-if="index === 0" class="fab fab--mini bg-green" @click="addEmail"><i class="zmdi zmdi-plus col-white"></i></span>
        </span>
      </div>
        <div class="list-item__center ">
        
        <input type="email"  :placeholder="'Add Email ' + (1+index)" class="text-input width-90" v-model="form.emails[index]">
        
        </div>
      </li>
      
     </ul>

     <br><br>

     <ul class="list">
        <li class="list-item ">
            <div class="list-item__left border-bottom">
              Owner
            </div>
            <div class="list-item__center"></div>
            <div class="list-item__right list-item--chevron ">
            <select id="contact" class="select-input width-auto">
              <option value="1" class="black">Michel (you)</option>
              <option value="2" class="black">Ajay</option>
              <option value="3" class="black">Ron</option>
            </select>
            </div>
        </li>
     </ul>
     </div>
     </form>

  </div>
</template>

<script>
    import eventHub from '../event';
    export default {
        data: function(){
            return {
                    form: this.$store.state.contact
                  }
      },

      mounted: function () {
        
      },

      computed: {
        showDetail(){
          return this.form.withDetail;
        }
      },

      methods: {
        create(){
              this.$store.state.contacts.push(this.form.name);
              this.reset();
              this.$router.go(-1);
        },

        reset(){
            this.form.withDetail = false; 
            this.form.name = '';
            this.form.account = '';
            this.form.Owner = '';
            this.form.numbers = [''];
            this.form.emails = [''];
        },

        account(){
            return this.$store.state.contact.account;
        },

        addNumber(){
          if(this.form.numbers.length < 3){
            this.form.numbers.push('');
          }
        },

        addEmail(){
          if(this.form.emails.length < 3){
            this.form.emails.push('');
          }
        }

      }

    }
</script>
