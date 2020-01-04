# react-led-display
Simple LED display control for numeric values 0 - 9

## Install

```bash
npm install react-led-display
```

## Demo


[<img src="https://i.ibb.co/Wy13sc0/react-led-display.png"/>](https://i.ibb.co/Wy13sc0/react-led-display.png)


## Props

```javascript
 <ReactLEDDisplay
    displayValue="4"    /* numeric value 0-9 */
    width="32"          /* maximum width of display panel */
    ledSize="2"         /* thickness of each led in pixels */
    foregroundCol="lightgreen"  /* Active LED color */    
    backgroundCol="darkgreen"/> /* Inactive LED color */
    skew="-7" /* Skew panel*/
```

## Example

```javascript
 <ReactLEDDisplay displayValue="1" width="18" ledSize="1" foregroundCol="lime" backgroundCol="darkgreen" skew="-6"/>
 ```
