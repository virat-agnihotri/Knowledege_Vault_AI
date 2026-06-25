import React from 'react'

function MainPage({Pages,showPage,PageTitle,setPageTitle}) {
    const showRealPage = Pages.find((x)=>x.id == showPage);
    console.log(showRealPage)
    return (
        <div>
        Hello
        </div>
    )
}

export default MainPage
