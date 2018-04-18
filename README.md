# React Block Reveal Animation

A simple React component to reveal content behind a block using CSS3 animations.

![](https://user-images.githubusercontent.com/1244867/38920515-b8218792-42f3-11e8-8de4-3349c3542950.png)

## Usage
Install using npm:

```
$ npm install react-block-reveal-animation --save
```

Install using yarn:

```
$ yarn add react-block-reveal-animation
```


Import `react-block-reveal-animation` and use it in your component like so:

```js
import React from 'react';
import BlockRevealAnimation from 'react-block-reveal-animation';

const MyComponent = () => (
  <div>
    <BlockRevealAnimation>
      This will be revealed
    </BlockRevealAnimation>
  </div>
);

export default MyComponent;
```

## Options
You can pass props to `<BlockRevealAnimation>` like so:

```js
<BlockRevealAnimation className="myCustomClassName" delay={2} duration={1} color="#ff0000">
  Children goes here
</BlockRevealAnimation>
```

### Props
All props are optional.

Name | Description | Default
--- | --- | ---
`color` | The color of the block | #000
`delay` | Animation start delay in seconds | 1
`duration` | Animation duration in seconds | 0.9



## The MIT License (MIT)

Copyright © `2018` `Petter Samuelsen`

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
