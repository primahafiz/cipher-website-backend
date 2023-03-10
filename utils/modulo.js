module.exports = {
    gcd(a,b){
        if(b == 0)return a
        return this.gcd(b,a%b)
    },

    invMod(a,b){
        for(let i=1;i<b;i++){
            if((a*i) % b == 1){
                return i
            }
        }
        return -1
    }
}