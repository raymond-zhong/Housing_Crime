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

})
