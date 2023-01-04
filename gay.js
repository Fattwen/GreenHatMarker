const replace = () => {
    document.body.innerHTML = document.body.innerHTML.replaceAll('蔡英文','ㄘㄨㄚˋ英文');
    document.body.innerHTML = document.body.innerHTML.replaceAll('劉家名','<span class=\'garmin-liu\' title=\'嘻嘻\'>劉家名</span>');
    document.querySelectorAll("input").forEach(
        input => {
            if(input.value.match('<span class=\'garmin-liu\' title=\'嘻嘻\'>劉家名</span>'))
            {   
                input.value = input.value.replaceAll('<span class=\'garmin-liu\' title=\'嘻嘻\'>劉家名</span>','劉家名');
                input.classList.add('garmin-liu-input');
            }
            
        }
    )
    document.querySelectorAll("option").forEach(
        option => {
            if(option.innerHTML.match('<span class=\'garmin-liu\' title=\'嘻嘻\'>劉家名</span>'))
            {   
                option.innerHTML = option.innerHTML.replaceAll('<span class=\'garmin-liu\' title=\'嘻嘻\'>劉家名</span>','劉家名');
                option.classList.add('garmin-liu-input');
            }
            
        }
    )
}

replace();