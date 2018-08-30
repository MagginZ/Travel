export default {
    changeCity (state, city) {
        state.city = city
        // localStorage.city = city // 使用localStorage存储 建议使用try  catch
        try{
           localStorage.city = city
        }
        catch(e){}
      }
}