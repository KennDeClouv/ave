<h1>Averroes Frontend-Framework</h1>
 Averroes Digital Islamic School FrontEnd Framework / CDN
 By Muhammad Ken Izzulhaq

this is enchanted bootstrap 5 front-end framework with some new feature, only with cdn u can adjust many thing in bootstrap like custom primary color or secondary, font, and extended value of many classes such as margin, padding, font size, gap, and u can explore many new feature there, happy coding! 
<br>
<br>
<h1>GETTING STARTED!!!</h1>

Put this on your html to use this cdn<br><br>
main CSS :<br>
```
<link rel="stylesheet" href="https://zulldevv.github.io/ave/avecdn.css">
```
main JS :<br>
```
<script src="https://zulldevv.github.io/ave/avecdn.js">
```
<br>
<br>
<h1>USAGE</h1>
Basic of using this cdn is u just need to add a :root to your css example:<br><br>
HTML :

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://zulldevv.github.io/ave/avecdn.css">
    <link rel="stylesheet" href="yourstyle.css"
    <title>Your title</title>
</head>

<body>

    <script src="https://zulldevv.github.io/ave/avecdn.js"></script>
</body>

</html>
```

CSS :
```
:root {
    --primary: #e082d1;
    --primary-rgb: 224, 130, 209;/* u need to add primary rgb too (just the number) */
    --primary-emphasis: #bc3fa7;
    --primary-table-bg: #edb8e4;
    --primary-table-active-bg: #e09cd5;
}
```
<br>
<br>

<h1> WHAT'S THE ENCHANTED FEATURE</h1>
<ol>
 <li><h3>COLOR ADJUSTMENT</h3></li>
 now u can make your own primary, secondary, and tertiary color by your self <br>
 u just need to add :root to your own css <br><br>
 this cumtom properties: <br><br>
<table>
    <thead>
        <tr>
            <th>No.</th>
            <th>Root</th>
            <th>Replaces</th>
            <th>About</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>

`
--primary
`
</td>
            <td>All primary color</td>
            <td>Replace bootstrap original primary color with your own color</td>
           <td>Hex / another color format</td>
        </tr>
        <tr>
            <td>1.1</td>
            <td>

`
--primary-rgb
`
</td>
            <td>All primary rgb color</td>
            <td>u need to add primary rgb of your primary color too ( just the number )</td>
           <td>RGB </td>
        </tr>
        <tr>
            <td>1.2</td>
            <td>

`
--primary-emphasis
`
</td>
            <td>Primary emphasis color</td>
            <td>an optional emphasis color of your primary color</td>
                    <td>Hex / another color format</td>
        </tr>
        </tr>
        <tr>
            <td>1.3</td>
            <td>

`
--primary-table-bg
`
</td>
            <td>primary table color</td>
            <td>chance your primary table color</td>
                    <td>Hex / another color format</td>
        </tr>
        </tr>
        <tr>
            <td>1.4</td>
            <td>

`
--primary-table-active-bg
`
</td>
            <td>primary table color</td>
            <td>on hover primary table color</td>
                    <td>Hex / another color format</td>
        </tr>
        <tr>
            <td>1.5</td>
            <td>

`
--primary-hover
`
             </td>
            <td>primary button hover color</td>
            <td>u need to chance this color if you're using primary button</td>
                    <td>Hex / another color format</td>
        </tr>
        <tr>
            <td>1.6</td>
            <td>
`
--primary-border
`    
            </td>
            <td>primary button border color</td>
            <td>u need to chance this color if you're using primary button</td>
                    <td>Hex / another color format</td>
        </tr>
        </tr>
        <tr>
            <td>1.7</td>
            <td>
`
--primary-active
`
</td>
            <td>primary button active color</td>
            <td>u need to chance this color if you're using primary button</td>
                    <td>Hex / another color format</td>
        </tr>
        </tr>
        <tr>
            <td>2</td>
            <td>

`
--secondary
`
            </td>
            <td>All secondary color</td>
            <td>Secondary color used for background or text, same usage as primary color</td>
                    <td>Hex / another color format</td>
        </tr>
        <tr>
            <td>3</td>
            <td>
`
--tertiary
`
</td>
            <td>third color if u want to use it</td>
            <td>Color used for informational messages or UI elements</td>
                    <td>Hex / another color format</td>
        </tr>
        <tr>
            <td>4</td>
            <td>

`
--focus-ring
`
</td>
            <td>focus ring color </td>
            <td>the default is blue like orginal</td>
                    <td>RGB</td>
        </tr>
    </tbody>
</table>
 <li>
  <h3>MARGIN</h3>
  Extended margin until 20 class, all margin same as bootstrap 5 margin but its extended by 10 class until m-20<br><br>
  <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;</th>
     <th>Style &emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>m-11</td>
     <td>margin : 9rem </td>
    </tr>
    <tr>
     <td>2</td>
     <td>m-20</td>
     <td>margin : 18rem </td>
    </tr>
    <tr>
     <td>3</td>
     <td>mt-20</td>
     <td>margin-top : 18rem </td>
    </tr>
    </tr>
    <tr>
     <td>4</td>
     <td>me-20</td>
     <td>margin-right : 18rem </td>
    </tr>
    </tr>
    <tr>
     <td>5</td>
     <td>mb-20</td>
     <td>margin-bottom : 18rem </td>
    </tr>
    </tr>
    <tr>
     <td>6</td>
     <td>ms-20</td>
     <td>margin-left : 18rem </td>
    </tr>
    <tr>
     <td>7</td>
     <td>mx-20</td>
     <td>margin-left : 18rem <br>
     margin-right : 18rem</td>
    </tr>
   </tbody>
  </table>
 </li>
 <li>
  <h3>PADDING</h3>
  Extended padding until 20 class, all padding same as bootstrap 5 padding but its extended by 10 class until p-20<br><br>
  <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;</th>
     <th>Style &emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>p-11</td>
     <td>padding : 9rem </td>
    </tr>
    <tr>
     <td>2</td>
     <td>p-20</td>
     <td>padding : 18rem </td>
    </tr>
    <tr>
     <td>3</td>
     <td>pt-20</td>
     <td>padding-top : 18rem </td>
    </tr>
    </tr>
    <tr>
     <td>4</td>
     <td>pe-20</td>
     <td>padding-right : 18rem </td>
    </tr>
    </tr>
    <tr>
     <td>5</td>
     <td>pb-20</td>
     <td>padding-bottom : 18rem </td>
    </tr>
    </tr>
    <tr>
     <td>6</td>
     <td>ps-20</td>
     <td>padding-left : 18rem </td>
    </tr>
    <tr>
     <td>7</td>
     <td>px-20</td>
     <td>padding-left : 18rem <br>
     padding-right : 18rem</td>
    </tr>
   </tbody>
  </table>
 </li>

 <li>
  <h3>FONT</h3>
  Adopted from web trend design now, the text is more large and we think bootstrap font size it doesnt enough so we extend fs until 20 classes, and also custom font family u can use, --ff-custom-1 until 3<br><br>
  <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
     <th>Style &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
     <th>About &emsp;&emsp;&emsp;&emsp;&emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>fs-1</td>
     <td>font-size : 1rem</td>
     <td rowspan="4">IMPORTANT THING!!, we chance bootstrap fs format so higher number more bigger font size too</td>
    </tr>
    <tr>
     <td>2</td>
     <td>fs-2</td>
     <td>font-size : 1.25rem</td>
    </tr>
    <tr>
     <td>3</td>
     <td>fs-3</td>
     <td>font-size : calc(1.275 + 0.3vw !important)</td>
    </tr>
    <tr>
     <td>4</td>
     <td>fs-25</td>
     <td>font-size : calc(1.375 + 11vw !important)</td>
    </tr>
    <tr>
     <td>5</td>
     <td>ff-custom-1</td>
     <td>font-family : var(--ff-custom-1)</td>
     <td rowspan="3">u can use --ff-custom-1 to make your own font family instead font family from bootstrap, it just ff-serif and the original font is sans-serif </td>
    </tr>
    <tr>
     <td>6</td>
     <td>ff-custom-2</td>
     <td>font-family : var(--ff-custom-2)</td>
    </tr>
    <tr>
     <td>7</td>
     <td>ff-custom-3</td>
     <td>font-family : var(--ff-custom-3)</td>
    </tr>
    <tr>
     <td>8</td>
     <td>fs-max</td>
     <td>font-size : var(--fs-max, 18rem) !important</td>
     <td>if u thing the fs is doesnt enough u can make your size by give root --fs-max</td>
    </tr>
   </tbody>
  </table>
 </li>
 
 <li>
  <h3>HEIGHT</h3>
  Modified all bootstrap height like h class and also vh.<br>
  <br>Height classes.
  <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;</th>
     <th>Style &emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>h-5</td>
     <td>height : 5% !important</td>
    </tr>
    <tr>
     <td>2</td>
     <td>h-10</td>
     <td>height : 10% !important</td>
    </tr>
    <tr>
     <td>3</td>
     <td>h-15</td>
     <td>height : 15% !important</td>
    </tr>
    </tr>
    <tr>
     <td>4</td>
     <td>h-25</td>
     <td>height : 25% !important</td>
    </tr>
    <tr>
     <td>5</td>
     <td>h-100</td>
     <td>height : 100% !important</td>
    </tr>
   </tbody>
  </table>
 <br>
 Vertical height classes.
    <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;</th>
     <th>Style &emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>vh-5</td>
     <td>height : 5vh !important</td>
    </tr>
    <tr>
     <td>2</td>
     <td>vh-10</td>
     <td>height : 10vh !important</td>
    </tr>
    <tr>
     <td>3</td>
     <td>vh-15</td>
     <td>height : 15vh !important</td>
    </tr>
    <tr>
     <td>4</td>
     <td>vh-25</td>
     <td>height : 25vh !important</td>
    </tr>
    <tr>
     <td>5</td>
     <td>vh-100</td>
     <td>height : 100vh !important</td>
    </tr>
   </tbody>
  </table>
 </li>

  <li>
  <h3>WIDTH</h3>
  Modified all bootstrap width like w class and also vw.<br>
  <br>Width classes.
  <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;</th>
     <th>Style &emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>w-5</td>
     <td>width : 5% !important</td>
    </tr>
    <tr>
     <td>2</td>
     <td>w-10</td>
     <td>width : 10% !important</td>
    </tr>
    <tr>
     <td>3</td>
     <td>w-15</td>
     <td>width : 15% !important</td>
    </tr>
    </tr>
    <tr>
     <td>4</td>
     <td>w-25</td>
     <td>width : 25% !important</td>
    </tr>
    <tr>
     <td>5</td>
     <td>w-100</td>
     <td>width : 100% !important</td>
    </tr>
   </tbody>
  </table>
 <br>
 Viewport width classes.
    <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;</th>
     <th>Style &emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>vw-5</td>
     <td>width : 5vw !important</td>
    </tr>
    <tr>
     <td>2</td>
     <td>vw-10</td>
     <td>width : 10vw !important</td>
    </tr>
    <tr>
     <td>3</td>
     <td>vw-15</td>
     <td>width : 15vw !important</td>
    </tr>
    <tr>
     <td>4</td>
     <td>vw-25</td>
     <td>width : 25vw !important</td>
    </tr>
    <tr>
     <td>5</td>
     <td>vw-100</td>
     <td>width : 100vw !important</td>
    </tr>
   </tbody>
  </table>
 </li>
  <li>
  <h3>GAP</h3>
  Need more gap value? now u sing correct cdn, we modified bootstrap normal gap, column gap, and also row gap 
  <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;</th>
     <th>Style &emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>gap-1</td>
     <td>gap: 0.25rem !important</td>
    </tr>
    <tr>
     <td>2</td>
     <td>gap-2</td>
     <td>gap: 0.5rem !important</td>
    </tr>
    <tr>
     <td>3</td>
     <td>gap-11</td>
     <td>gap: 9rem !important</td>
    </tr>
    <tr>
     <td>4</td>
     <td>gap-20</td>
     <td>gap: 18rem !important</td>
    </tr>
    <tr>
     <td colspan="3">ROW GAP</td>
    </tr>
    <tr>
     <td>5</td>
     <td>row-gap-1</td>
     <td>row-gap: 0.25rem !important</td>
    </tr>
    <tr>
     <td>6</td>
     <td>row-gap-2</td>
     <td>row-gap: 0.5rem !important</td>
    </tr>
    <tr>
     <td>7</td>
     <td>row-gap-11</td>
     <td>row-gap: 9rem !important</td>
    </tr>
    <tr>
     <td>8</td>
     <td>row-gap-20</td>
     <td>row-gap: 18rem !important</td>
    </tr>
     <tr>
     <td colspan="3">COLUMN GAP</td>
    </tr>
    <tr>
     <td>9</td>
     <td>column-gap-1</td>
     <td>column-gap: 0.25rem !important <br>  -moz-column-gap: 0.25rem !important;</td>
    </tr>
    <tr>
     <td>10</td>
     <td>column-gap-2</td>
     <td>column-gap: 0.5rem !important <br>  -moz-column-gap: 0.5rem !important;</td>
    </tr>
    <tr>
     <td>11</td>
     <td>column-gap-11</td>
     <td>column-gap: 9rem !important <br>  -moz-column-gap: 9rem !important;</td>
    </tr>
    <tr>
     <td>12</td>
     <td>column-gap-20</td>
     <td>column-gap: 18rem !important <br>  -moz-column-gap: 18rem !important;</td>
    </tr>
   </tbody>
  </table>
 </li>
</ol>

<br>
<br>


<h1>NEW FEATURE</h1>
<ol>
 <li>
  <h3>ODD COLUMN</h3>
  some people have problem when using row and column and wanna make a center of it, so we make odd column which the col is 13 so u can make an element center here is example : <br><br>
  <table>
   <thead>
    <tr>
     <th>Class &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
     <th>Style &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
     <th>About &emsp;&emsp;&emsp;&emsp;&emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>col-y-13</td>
     <td>flex : 0 0 auto <br> width : 100%</td>
     <td rowspan="6">Bootstrap grid system / column with odd column so we can make an elemnt center with this odd column, all function and class same as bootstrap normal grid system, even the responsive too.</td>
    </tr>
    <tr>
     <td>col-y-sm-13</td>
     <td>flex : 0 0 auto <br> width : 100%</td>
    </tr>
    <tr>
     <td>col-y-md-13</td>
     <td>flex : 0 0 auto <br> width : 100%</td>
    </tr>
    <tr>
     <td>col-y-lg-13</td>
     <td>flex : 0 0 auto <br> width : 100%</td>
    </tr>
    <tr>
     <td>col-y-xl-13</td>
     <td>flex : 0 0 auto <br> width : 100%</td>
    </tr>
    <tr>
     <td>col-y-xxl-13</td>
     <td>flex : 0 0 auto <br> width : 100%</td>
    </tr>
   </tbody>
  </table>
 </li>
  <li>
  <h3>TURN </h3>
  Need class to turn your element? we provide turn classes by rotate it multiple by 5 degress from turn-5 until turn-180, there is negative value too : turn--5<br><br>
  <table>
   <thead>
    <tr>
     <th>No</th>
     <th>Class &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
     <th>Style &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>turn-5</td>
     <td>transform : rotate(5deg)</td>
    </tr>
    <tr>
     <td>2</td>
     <td>turn-10</td>
     <td>transform : rotate(10deg)</td>
    </tr>
    <tr>
     <td>3</td>
     <td>turn-90</td>
     <td>transform : rotate(90deg)</td>
    </tr>
    <tr>
     <td>4</td>
     <td>turn-180</td>
     <td>transform : rotate(180deg)</td>
    </tr>
     <td>5</td>
     <td>turn--5</td>
     <td>transform : rotate(-5deg)</td>
    </tr>
    <tr>
     <td>6</td>
     <td>turn--10</td>
     <td>transform : rotate(-10deg)</td>
    </tr>
    <tr>
     <td>7</td>
     <td>turn--90</td>
     <td>transform : rotate(-90deg)</td>
    </tr>
    <tr>
     <td>8</td>
     <td>turn--180</td>
     <td>transform : rotate(-180deg)</td>
    </tr>
   </tbody>
  </table>
 </li>
</ol>
<br>
<br>
<h1>EXTRA SPECIAL FEATURE</h1>
u can use font awesome icons too, in this cdn we import font awesome css cdn u can use even the max pro. enjoy your free pro icons, to see whats icons are available u can visit offcial font awesome website <a href="https://fontawesome.com/icons" >here</a>
