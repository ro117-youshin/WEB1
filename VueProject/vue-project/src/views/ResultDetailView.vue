<template lang="">
    <div>
        <h1>후보 연령별 득표율</h1>
    <table border="1, black" width="80%">
        <tr>
            <td width="200">연령</td>
            <td>득표율</td>
        </tr>
    </table>

    <ResultDetailPage v-bind:ageGroup="list"/>

    </div>

</template>
<script>
import ResultDetailPage from '@/components/ResultDetail.vue'

export default {
    name: "ResultDetailView",
    components: {
        ResultDetailPage,
    },
    data() {
        return {
            list: [
                {
                    ages:"10",
                    numberofvotes:"1",
                    rateofvotes:"33.3"
                },
                {
                    ages:"20",
                    numberofvotes:"0",
                    rateofvotes:"0"
                },
                {
                    ages:"30",
                    numberofvotes:"0",
                    rateofvotes:"0"
                },
                {
                    ages:"40",
                    numberofvotes:"1",
                    rateofvotes:"33.3"
                },
                {
                    ages:"50",
                    numberofvotes:"1",
                    rateofvotes:"33.3"
                },
                {
                    ages:"60",
                    numberofvotes:"0",
                    rateofvotes:"0"
                },
                {
                    ages:"70",
                    numberofvotes:"0",
                    rateofvotes:"0"
                },
                {
                    ages:"80",
                    numberofvotes:"0",
                    rateofvotes:"0"
                },
                {
                    ages:"90",
                    numberofvotes:"0",
                    rateofvotes:"0"
                }
            ]
        }
    }
};
</script>
<style lang="scss" scoped>
    table{
        margin-left: auto;
        margin-right: auto;
        background-color: white;
    }
</style>