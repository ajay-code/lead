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
          <span><a class="plain-anchor" @click.prevent="withDetail = true">Add More Details</a></span>
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
      <li class="list-item ">
      <div class="list-item__left">
        <span class="icon-span">
            <label for="number">
              <span class="fab fab--mini bg-green"><i class="zmdi zmdi-plus col-white"></i></span>
            </label>
        </span>
      </div>
        <div class="list-item__center">
        
        <input type="number" id="number" value="" placeholder="Add Number" class="text-input width-90" >
        
        </div>
      </li>
      
     </ul>

     <div class="title">
          Email
     </div>

     <ul class="list">
      <li class="list-item ">
      <div class="list-item__left">
        <span class="icon-span">
            <label for="email">
              <span class="fab fab--mini bg-green"><i class="zmdi zmdi-plus col-white"></i></span>
            </label>
          </span>
      </div>
        <div class="list-item__center ">
        
        <input type="email" value="" id="email" placeholder="Add Email Address" class="text-input width-90" >
        
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
                    withDetail: false,
                    form: {
                      name: ''
                    }
                  }
      },

      mounted: function () {
        
      },

      computed: {
        showDetail(){
          return this.$store.state.contact.set || this.withDetail;
        }
      },

      methods: {
        create(){
          if(!this.withDetail){
              this.$store.state.contacts.push(this.form.name);
              this.$router.go(-1);
          }else{

          }
        },
        account(){
          if(this.$store.state.contact.set){
            return this.$store.state.contact.obj.account;
            
          }

          return '';
        }

      }

    }
</script>
