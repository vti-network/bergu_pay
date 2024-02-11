//Body.jsx
import {GeneratedOTP,GeneratedID,TimeNow,GeneratedADDRESS,GeneratedKEY,GeneratedTKN,getDeviceHeader,GeneratedHASH} from './Var.jsx' //GeneratedHASH
const transaksi = 
{
    opt:'kirim',
    jumlah:'1000',
    date_time: TimeNow(),
    txhash:GeneratedHASH(),
    penerima:GeneratedADDRESS(),
    pengirim:GeneratedADDRESS(),
}
export const Body_register = {
    ID: GeneratedID(),
    email: '',
    password: '',
    address: 'xBR'+GeneratedADDRESS(),
    key: GeneratedKEY(),
    balance: 
    {
        bergu: 1000
    },
    token: GeneratedTKN(),
    otp: GeneratedOTP(),
    history: 
    {
        created: TimeNow(),
        transaksi,
    },
    last_login: 
    {
        date_time: TimeNow(),
        device:getDeviceHeader(),
    } ,

}

