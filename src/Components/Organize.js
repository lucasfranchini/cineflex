export default function organize(a,b){
    if(parseInt(a)<parseInt(b)) return -1;
    if(parseInt(a)>parseInt(b)) return 1;
    return 0;
}