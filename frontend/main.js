const { createApp } = Vue

createApp({
    data() {
        return {
            records: [],
        }
    },

    created() {
        axios
            .get("http://localhost/php-dischi-json/API/get-list.php")
            .then((response) => { this.records = response.data; });
    },
}).mount('#app')
