window.addEventListener('DOMContentLoaded', function()
        {
            var $start = document.querySelector('.input-grp [name="picker-start"]'),
                $end = document.querySelector('.input-grp [name="picker-end"]');
            $start.DatePickerX.init({
                format: 'mm/dd/yyyy',
                todayButton: false,
                clearButton: false,
                mondayFirst: false,
                weekDayLabels: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
            });
            $end.DatePickerX.init({
              format: 'mm/dd/yyyy',
              todayButton: false,
              clearButton: false,
              mondayFirst: false,
              weekDayLabels: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
            });
        });
