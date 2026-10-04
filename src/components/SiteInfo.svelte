<script lang="ts">
import Icon from "$components/Icon.svelte";

interface Props {
	fields: Array<{ label: string; value: string }>;
	messages: {
		heading: string;
		hint: string;
		copy: string;
		copied: string;
		failure: string;
	};
}

let { fields, messages }: Props = $props();
let copied = $state<number | null>(null);
let status = $state("");

async function copy(index: number) {
	copied = null;
	status = "";
	try {
		await navigator.clipboard.writeText(fields[index].value);
		copied = index;
		status = `${fields[index].label}: ${messages.copied}`;
	} catch {
		status = messages.failure;
	}
}
</script>

<div class="flex flex-col gap-2 mt-4 min-w-0">
	<h3>{messages.heading}</h3>
	<p class="text-sm text-secondary">{messages.hint}</p>
	<div class="flex flex-col gap-2">
		{#each fields as field, index}
			<button type="button" onclick={() => copy(index)} aria-label={`${messages.copy}: ${field.label}, ${field.value}`} class="w-full items-center gap-3 rounded border border-weak p-3 text-start transition-colors hover:bg-block">
				<span class="flex min-w-0 grow flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
					<span class="shrink-0 text-sm text-secondary sm:w-24">{field.label}</span>
					<span class="min-w-0 select-text [overflow-wrap:anywhere]">{field.value}</span>
				</span>
				<span class="shrink-0 text-secondary" aria-hidden="true"><Icon name={copied === index ? "lucide--check" : "lucide--copy"} size="1rem" /></span>
			</button>
		{/each}
	</div>
	<p role="status" aria-live="polite" aria-atomic="true" class="min-h-6 text-sm text-secondary">{status}</p>
</div>
