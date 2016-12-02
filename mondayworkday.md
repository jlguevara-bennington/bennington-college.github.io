---
layout: page
title: The Flying Human Circus of the Air
permalink: /stuffdonetoday/
---

<ul>
	<li id="new_text">New Text</li>
</ul>
<div id="pool">
    
</div>
<script type="text/javascript">
	$("#new_text").click(
		function() {
			var newText = Object.create(content.text);
			newText.define(prompt('enter your text'));
			newText.place();
		}
	);
</script>