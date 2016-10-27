$(document).ready(function(){
    $('#assault').click(function(){
        if($('#assault').is(':checked'))
            for(j = 0; j < dict['ASSAULT'].length; j++)
            {
                dict['ASSAULT'][j].setVisible(true);
            }
        else
        {
            for(j = 0; j < dict['ASSAULT'].length; j++)
            {
                dict['ASSAULT'][j].setVisible(false);
            }
        }
    });

    $('#arson').click(function(){
        if($('#arson').is(':checked'))
            for(j = 0; j < dict['ARSON'].length; j++)
            {
                dict['ARSON'][j].setVisible(true);
            }
        else
        {
            for(j = 0; j < dict['ARSON'].length; j++)
            {
                dict['ARSON'][j].setVisible(false);
            }
        }
    });

    $('#sexoffense').click(function(){
        if($('#sexoffense').is(':checked'))
            for(j = 0; j < dict['SEX OFFENSES, FORCIBLE'].length; j++)
            {
                dict['SEX OFFENSES, FORCIBLE'][j].setVisible(true);
            }
        else
        {
            for(j = 0; j < dict['SEX OFFENSES, FORCIBLE'].length; j++)
            {
                dict['SEX OFFENSES, FORCIBLE'][j].setVisible(false);
            }
        }
    });

    $('#kidnapping').click(function(){
        if($('#kidnapping').is(':checked'))
            for(j = 0; j < dict['KIDNAPPING'].length; j++)
            {
                dict['KIDNAPPING'][j].setVisible(true);
            }
        else
        {
            for(j = 0; j < dict['KIDNAPPING'].length; j++)
            {
                dict['KIDNAPPING'][j].setVisible(false);
            }
        }
    });
//
$('#sfhome').click(function(){
    if($('#sfhome').is(':checked'))
        for(j = 0; j < dict['houses'].length; j++)
        {
            dict['houses'][j].setVisible(true);
        }
    else
    {
        for(j = 0; j < dict['houses'].length; j++)
        {
            dict['houses'][j].setVisible(false);
        }
    }
});

$('#rent').click(function(){
    if($('#rent').is(':checked'))
        for(j = 0; j < dict['rent'].length; j++)
        {
            dict['rent'][j].setVisible(true);
        }
    else
    {
        for(j = 0; j < dict['rent'].length; j++)
        {
            dict['rent'][j].setVisible(false);
        }
    }
});
$('#condo').click(function(){
    if($('#condo').is(':checked'))
        for(j = 0; j < dict['condo'].length; j++)
        {
            dict['condo'][j].setVisible(true);
        }
    else
    {
        for(j = 0; j < dict['condo'].length; j++)
        {
            dict['condo'][j].setVisible(false);
        }
    }
});

$('#filterprice').click(function(){
    if($('#sfhome').is(':checked'))
        for(var i=0; i<dict['houses'].length;i++)
            dict['houses'][i].setVisible(true);
    if($('#condo').is(':checked'))
        for(var i=0; i<dict['condo'].length;i++)
            dict['condo'][i].setVisible(true);
    if($('#rent').is(':checked'))
        for(var i=0; i<dict['rent'].length;i++)
            dict['rent'][i].setVisible(true);
    var minrange = $('#minrange').val();
    var maxrange = $('#maxrange').val();
    if (minrange.length === 0)
        minrange = 0;
    if (maxrange.length === 0)
        maxrange = Number.MAX_SAFE_INTEGER;
    minrange = parseInt(minrange);
    maxrange = parseInt(maxrange);
    if(isNaN(minrange) || isNaN(maxrange))
        return;
    for(var i=0; i<dict['hprices'].length;i++)
    {
        if(dict['hprices'][i] > maxrange || dict['hprices'][i] < minrange)
            dict['houses'][i].setVisible(false);
    }
    for(var i=0; i<dict['cprices'].length;i++)
    {
        if(dict['cprices'][i] > maxrange || dict['cprices'][i] < minrange)
            dict['condo'][i].setVisible(false);
    }
    for(var i=0; i<dict['rprices'].length;i++)
    {
        if(dict['rprices'][i] > maxrange || dict['rprices'][i] < minrange)
            dict['rent'][i].setVisible(false);
    }
})


})
