<template>
    <div>
    <div class="toolbar">
      
      <div class="center toolbar__center">
        New Lead
      </div>
      
    </div>

    <br><br>
        <ul class="list">
          
          <router-link to="contacts" >
          
          <li class="list-item list-item--chevron">
            <div class="list-item__center" >
              <span class="icon-span">
                
               <i class="fa fa-user fa-2x list-item__icon"></i>
              </span>
            <input type="text" class="text-input width-90" placeholder="Choose Contact" :value="contact()">
            </div>
          </li>
          
          </router-link>

          <router-link to="accounts">

          <li class="list-item list-item--chevron">
            <div class="list-item__center" >
              <span class="icon-span">
                <i class="fa fa-id-badge fa-2x list-item__icon"></i>
              </span>
            <input type="text" class="text-input width-90" placeholder="Choose Account" :value="account()">
            </div>
          </li>
          </router-link>

          <li class="list-item ">
            <div class="list-item__center">
              
            <input type="text" class="text-input" placeholder="Lead title" value="">
            </div>
          </li>
        </ul>
        
        <br><br>
        <ul class="list">
          <li class="list-item ">
            <div class="list-item__center">
            <input type="text" class="text-input" placeholder="Lead value" value="">
            </div>
          </li>
        </ul>
    
        <br><br>
        <ul class="list ">
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
</template>

<script>
    import eventHub from '../event';
    export default {
        data: function(){
            return {
                    
                  }
      },

      mounted: function () {
        $('body').addClass('bg-lblue');
        $('body').removeClass('bg-white');
        
      },

      computed: {
        
      },

      methods: {
        account(){
          return this.$store.state.lead.account;
        },
        contact(){
          return this.$store.state.lead.contact;
        }

      }

    }
</script>
