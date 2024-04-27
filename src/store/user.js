import {defineStore} from 'pinia';
import { ref } from 'vue';

const useUserStore=defineStore('user',()=>{

    const token=ref("234");

    return {token};

});


export default useUserStore;