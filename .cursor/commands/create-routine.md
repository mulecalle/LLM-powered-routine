# Create a new monthly routine

Create a new routine using the `.cursor/rules/create-routine.mdc` template for the incoming month.

## Mandatory Pre-Flow Setup and Validation

Mandatory Pre-Flow Steps:
1.  Identify the latest existing routine under `month/` (the current first element of the sidebar) and calculate the incoming month from it.
2.  Derive the variables defined by the rule: `$MONTH_KEY`, `$MONTH_TITLE`, `$MONTH_SHORT`, and `$YEAR_SHORT`. When the incoming month is January, increment `$YEAR_SHORT` (December -> January rollover).
3.  Verify Calculation: Immediately double-check the calculated incoming month and year with the user for accuracy and confirmation.

The flow MUST NOT start until the user has confirmed the calculated month is correct.

## Mandatory Workflow Execution Check

Condition for Successful Completion:
The flow MUST NOT end unless ALL of the following files have been successfully created/updated:
* month/$YEAR_SHORT/$MONTH_KEY/d1.md
* month/$YEAR_SHORT/$MONTH_KEY/d2.md
* month/$YEAR_SHORT/$MONTH_KEY/d3.md
* .vitepress/config.mts (new month added as the FIRST sidebar entry, links pointing to /month/$YEAR_SHORT/$MONTH_KEY/dN)
* index.md (new month added as the FIRST action with theme: brand; previous month demoted to theme: alt)

Failure Condition:
If ANY of the required files is missing, or any generated link/path is malformed (e.g. missing the `$YEAR_SHORT` segment), it indicates a workflow execution failure.

Action on Failure:
1.  Delete all partially generated files.
2.  Restart the entire workflow from the beginning.
