# 006_Lucky13Productions

Angela Nicole Cobble (@TheAngieChu)

December 01st, 2023

Code Louisville Capstone


Lucky 13 Productions is a hub for published and/or aspiring indie authors to hone their skills and launch their careers. Authors will learn the basics of plotting, writing, editing, publishing, and marketing without wanting to pull out their hair. After all, they need that hair for their author headshots :)


This site also features information about upcoming Writing Industry conferences and events, quizzes visits on their indie author knowledge, and provides ways to de-stress until the writer's block passes. Visitors can also learn more about the authors who've utilized Lucky 13 Productions's services and furthered their careers as a result!


FEATURE IMPLEMENTATION
----------------------
<b>Multiple-Choice Quiz</b>

Lucky 13 Productions's website features a quiz on its homepage that uses arrays to store and retreive information that is displayed via the quiz box. There are 5 multiple-choice questions. The visitor's answer will be highlighted, and they can change their answer as many times as they want before hitting the "Next" button. After making their selections for all five questions, the visitor will be shown their score out of a possible 5 points. They can retake the quiz by refreshing the homepage in their browser window.

<b>Countdown To Camp NaNoWriMo</b>

This countdown timer toward the bottom of the homepage calculates and displays data based on an external factor. In this case, it gets the current date and displays how many days remain until the next Camp NaNoWriMo writing event on April 01st, 2024. The timer automatically counts down based on the timezone data selected on the visitor's viewing device.

<b>Writer's Block Breaker</b>

This widget at the bottom of the homepage retrieves data from Bored API's third-party API and uses it to display productivity tips within the Lucky 13 Productions website. The API in question is available at [https://www.boredapi.com/api/activity]. When visitors click on the "Click To Load An Activity Above :)" button, a suggestion will become listed above. Visitors can continue to click the button to remove the previous suggestion and load a new suggestion in its place.

<b>Contact Page</b>

The Contact page showcases a contact form that stores the visitor's submitted values using an external API. After a visitor submits their information via the contact form, those submitted values are transmitted to a storage list in the programmer's GetForm.io account. Anyone with the GetForm.io credentials can log into that account to see the submitted results. The login credentials for GetForm.io will be submitted via Code Louisville's Capstone 2023 Form, and they can also be requested via a detailed message to theangiechu@gmail.com.