<template>
    <div>

    <div class="toolbar">
      <div class="left toolbar__left" @click="$router.go(-1)">
        <span class="back-button" style="display: inline-block;">
          <span class="back-button__icon"></span>
            <span class="back-button__label">Back</span>
        </span>
      </div>
      <div class="center toolbar__center">
        Accounts
      </div>
    </div>
    
    <ul class="list">
      <li class="list-item bg-gray">
        <div class="list-item__center ">
            <input type="search" value="" placeholder="Search" class="search-input bg-white" v-model="search">
        </div>
      </li>
     </ul>
     <p class="bg-lblue no-margin" v-text="search"></p>
     <br><br>
     <ul class="list">
          <li v-for="name in filternames" class="list-item ">
            <div class="list-item__center" v-text="name" @click="setContactAccount(name)">
                
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
        filternames: function(){
                        if(!this.search){
                            return this.$store.state.accounts;
                        }
                        return this.$store.state.accounts.filter((name) => {
                            return name.toLowerCase().indexOf(this.search.toLowerCase())>=0;
                        });
        }
      },

      methods: {
        select: function(account){
            eventHub.$emit('account-selected', account);
            this.clear();
        },

        clear: function(){
            this.search = '';
        },
        setContactAccount(account){
          console.log(account);
          this.$store.state.contact.obj.account = account;
          this.$store.state.contact.set = true;
          console.log(this.$store.state.contact.obj);
          this.$router.go(-1);
        }

      }

    }
</script>
