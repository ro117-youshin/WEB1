<template>
    <table border="1, black" width=80%>
        <tr v-for="candidate in candidates" :key="candidate.id">
            <td width="200"><router-link to="/resultDetail"><span v-html="candidate.id"></span>번&nbsp;<strong><span v-html="candidate.name"></span></strong></router-link></td>
            <td align="left"><img src="../assets/redbar.png" height="20" :width=getRateOfVotes(candidate.rateofvotes) />&nbsp;<span v-html="candidate.numberofvotes"></span>&nbsp;(<span v-html="candidate.rateofvotes"></span>%)
            </td>
        </tr>
    </table>
</template>
<script>
export default {
    name: "ResultPage",
    props: {
        candidates: Array,
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
