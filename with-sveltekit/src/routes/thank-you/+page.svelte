<svelte:head>
	<!-- Trackdesk tracker begin -->
	<script async src="//cdn.trackdesk.com/tracking.js"></script>
	<script>
		(function (t, d, k) {
			(t[k] = t[k] || []).push(d);
			t[d] =
				t[d] ||
				t[k].f ||
				function () {
					(t[d].q = t[d].q || []).push(arguments);
				};
		})(window, 'trackdesk', 'TrackdeskObject');

		trackdesk('robocop', 'conversion', {
			conversionType: 'sale'
		});
	</script>
	<!-- Trackdesk tracker end -->
</svelte:head>

<h1>Thank you page</h1>
