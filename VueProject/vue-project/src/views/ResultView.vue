<template>
    <div class="container">
    <h1>후보별 득표율</h1>
    <table border="1, black" width=80%>
        <tr>
            <td width="200">이름</td>
            <td>득표율</td>
        </tr>
    </table>

    <ResultPage v-bind:candidates="list"/>

    </div>
</template>

<script>
import ResultPage from "@/components/Result.vue";

export default {
    name: "ResultView",
    components: {
        ResultPage,
    },
    data() {
        return {
            list: [
                {
                    id:"1", 
                    name: "김유신", 
                    numberofvotes: "3", 
                    rateofvotes: "14.3"
                },
                {
                    id:"2", 
                    name: "손영식", 
                    numberofvotes: "6", 
                    rateofvotes: "28.6"
                },
                {
                    id:"3", 
                    name: "배기한", 
                    numberofvotes: "2", 
                    rateofvotes: "9.5"
                },
                {
                    id:"4", 
                    name: "남기준", 
                    numberofvotes: "1", 
                    rateofvotes: "4.8"
                },
                {
                    id:"5", 
                    name: "김태언", 
                    numberofvotes: "3", 
                    rateofvotes: "14.3"
                },
                {
                    id:"6", 
                    name: "김정재", 
                    numberofvotes: "1", 
                    rateofvotes: "4.8"
                },
                {
                    id:"7", 
                    name: "서지윤", 
                    numberofvotes: "5", 
                    rateofvotes: "23.8"
                }
            ]
        }
    },
};
</script>
<style lang="scss" scoped>
table {
    margin-left: auto;
    margin-right: auto;
    background-color: white;
}
</style>