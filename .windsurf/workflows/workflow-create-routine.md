---
description: Prompt to trigger the rule-create-routine rule
---

# Goal: Create a new routine using the `@rule-create-routine.md` template for the incoming month.

## Mandatory Pre-Flow Setup and Validation

Mandatory Pre-Flow Steps:
1.  Calculate the specific date/name of the incoming month.
2.  Verify Calculation: Immediately double-check the calculated incoming month with the user for accuracy and confirmation.

The flow MUST NOT start until the user has confirmed the calculated month is correct.

## Mandatory Workflow Execution Check

Condition for Successful Completion:
The flow MUST NOT end unless ALL of the following files have been successfully created:
* month/26/$MONTH_KEY/d1.md
* month/26/$MONTH_KEY/d2.md
* month/26/$MONTH_KEY/d3.md
* .vitepress/config.mts
* index.md

Failure Condition:
If ANY of the required files is missing, it indicates a workflow execution failure.

Action on Failure:
1.  Delete all partially generated files.
2.  Restart the entire workflow from the beginning.