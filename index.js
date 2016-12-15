module.exports = {
    methods: {
        updateItemArray(arr1, arr2, id){
            arr1.splice(arr1.findIndex(item => item.id == id), 1, arr2)
        }
    }
}
