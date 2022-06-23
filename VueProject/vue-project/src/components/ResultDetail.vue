<template>
    <table border="1, black" width=80%>
        <tr v-for="age in ageGroup" :key="age.ages">
            <td width="200"><strong><span v-html="age.ages"></span>대</strong></td>
            <td align="left"><img src="../assets/redbar.png" height="20" :width=getRateOfVotes(age.rateofvotes) />&nbsp;<span v-html="age.numberofvotes"></span>&nbsp;(<span v-html="age.rateofvotes"></span>%)
            </td>
        </tr>
    </table>
</template>
<script>
export default {
    name: "ResultDetailPage",
    props: {
        ageGroup: Array,
    },
    methods: {
        getRateOfVotes: function(rateofvotes) {
            return rateofvotes*7;
        }
    }
};
</script>
<style lang="scss" scoped>
    table {
        background-color: white;
        margin-left: auto;
        margin-right: auto;
    }
</style>
