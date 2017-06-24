<template>
    <div>
    <router-link to="newcontact">
      <span class="fab fab--mini bg-green fab--bottom__right">
        <i class="zmdi zmdi-plus col-white"></i>
      </span>
    </router-link>
    <ul class="list">
      <li class="list-item bg-gray">
        <div class="list-item__left ">
            <router-link to="/">
              <span class="back-button" style="display: inline-block;">
                <span class="back-button__icon"></span><span class="back-button__label">Back</span>
              </span>
            </router-link>
        </div>
        <div class="list-item__center ">
            <input type="search" value="" placeholder="Search" class="search-input bg-white" v-model="search">
        </div>
      </li>
     </ul>
     <p class="bg-lblue no-margin" v-text="search"></p>
     <br><br>
     <ul class="list">
          <li v-for="name in filternames" class="list-item ">
            <div class="list-item__center" v-text="name" @click="setLeadContact(name)">
                
            </div>
          </li>
          
      </ul>
      </div>
</template>

<script>
    import eventHub from '../event';
    export default {
        data: function(){
            return {
                    search: '',
                  }
      },

      mounted: function () {
        $('body').addClass('bg-white');
        $('body').removeClass('bg-lblue');


      },

      computed: {
        filternames: function() {
                          if(!this.search){
                              return this.$store.state.contacts;
                          }
                          return this.$store.state.contacts.filter((name) => {
                              return name.toLowerCase().indexOf(this.search.toLowerCase())>=0;
                          });
                        }
      },

      methods: {
        select(contact){
            eventHub.$emit('contact-selected', contact);
            this.clear();
        },

        clear(){
            this.search = '';
        },

        setLeadContact(contact){
          this.$store.state.lead.contact = contact;
          this.$router.go(-1);
        }


      }

    }
</script>
