# CI/CD Pipeline Documentation

## Overview

This document describes the comprehensive CI/CD pipeline for the Sky See Video project. The pipeline has been completely overhauled to provide robust quality gates, automated testing, and seamless deployment workflows.

## Pipeline Structure

### Quality Checks Job

**Triggers:** All push events to `main` and `develop`, and all pull requests to any branch

**Steps:**

1. **Type Checking** - Validates TypeScript compilation
2. **Linting** - Checks code quality using ESLint with comprehensive rules
3. **Formatting** - Validates code formatting using Prettier

**Behavior:**

- Fails fast if any quality check doesn't pass
- Provides clear feedback on what needs to be fixed
- Required for all subsequent jobs

### Auto-Fix Job (Push Events Only)

**Triggers:** Only on push events when quality checks fail

**Steps:**

1. Automatically runs `yarn lint:fix` to fix linting issues
2. Automatically runs `yarn format` to fix formatting issues
3. Commits changes with message: "🤖 Auto-fix: format and lint code [skip ci]"
4. Re-runs quality checks to ensure fixes are successful

**Benefits:**

- Prevents broken builds due to minor formatting/linting issues
- Maintains code quality standards automatically
- Saves developer time on trivial fixes

### Tests Job

**Triggers:** After successful quality checks completion

**Steps:**

1. Runs comprehensive test suite with coverage reporting
2. Validates all unit tests pass
3. Generates coverage reports

**Requirements:**

- Must have >90% test coverage (currently at 99.07%)
- All tests must pass

### Security Audit Job

**Triggers:** Runs in parallel with other jobs

**Steps:**

1. Performs `yarn npm audit` to check for security vulnerabilities
2. Reports any moderate or higher severity issues
3. Continues with warnings (non-blocking)

### Preview Deploy Job (Pull Requests Only)

**Triggers:** Only on pull requests, after all quality gates pass

**Steps:**

1. Deploys to Firebase preview environment
2. Posts comment on PR with preview URL and build status
3. Updates comment on subsequent commits

**Benefits:**

- Allows stakeholders to preview changes before merge
- Provides immediate feedback on visual changes
- Enables testing in production-like environment

### Production Deploy Job (Main Branch Only)

**Triggers:** Only on push to `main` branch, after all quality gates pass

**Steps:**

1. Builds production-optimized bundle
2. Deploys to Firebase production hosting
3. Updates live site at https://sky-see-video.web.app

**Safety:**

- Only runs if ALL quality gates pass
- Requires explicit push to main branch
- Protected by branch protection rules

## Code Quality Standards

### ESLint Configuration

- **TypeScript Support**: Full TypeScript linting with strict rules
- **React Best Practices**: React and React Hooks linting
- **Accessibility**: JSX accessibility linting
- **Code Style**: Integrated with Prettier for consistent formatting

### Key Rules:

- No unused variables (with underscore exception for intentionally unused)
- Console statements are warnings (allowed but discouraged)
- Debugger statements are errors
- Proper React hooks usage
- Accessibility compliance
- Import organization

### Prettier Configuration

- **Tab Width**: 2 spaces
- **Semicolons**: Disabled
- **Quotes**: Double quotes
- **Trailing Commas**: All positions

## Branch Strategy

### Main Branch (`main`)

- **Protected**: Only accepts PRs from `develop`
- **Auto-Deploy**: Automatically deploys to production on successful push
- **Quality Gates**: All quality checks must pass

### Develop Branch (`develop`)

- **Integration Branch**: Used for staging and integration testing
- **Preview Deploys**: Gets preview deployments on PRs
- **Testing Ground**: Where feature branches are merged for testing

### Feature Branches

- **Naming**: `feature/description` or `feature/issue-number`
- **PR Target**: Always target `develop` branch
- **Quality Checks**: Must pass all quality gates before merge

## Workflow Examples

### Feature Development Workflow

1. Create feature branch from `develop`
2. Make changes and commit
3. Push branch to trigger quality checks
4. Create PR to `develop`
5. CI runs quality checks and deploys preview
6. Review and merge after approval
7. Delete feature branch

### Release Workflow

1. Create PR from `develop` to `main`
2. CI runs all quality checks and creates preview
3. Review and test preview deployment
4. Merge to `main` after approval
5. Production deployment happens automatically

### Hotfix Workflow

1. Create hotfix branch from `main`
2. Make critical fix
3. Create PR to `main` (bypass develop for critical fixes)
4. Fast-track review and merge
5. Cherry-pick to `develop` to keep branches in sync

## Error Handling

### Quality Check Failures

- **On Push**: Auto-fix attempts to resolve issues and commits fixes
- **On PR**: Provides clear feedback on what needs to be fixed
- **Developer Action**: Run `yarn quality:fix` locally to fix issues

### Test Failures

- **Immediate Feedback**: Clear error messages and stack traces
- **Coverage Drops**: Fails if coverage drops below thresholds
- **Developer Action**: Fix tests and ensure adequate coverage

### Deployment Failures

- **Preview Deploy**: Comments on PR with error details
- **Production Deploy**: Notifies team of deployment failure
- **Rollback**: Manual rollback may be required for critical issues

## Local Development Commands

```bash
# Run all quality checks
yarn quality:check

# Auto-fix quality issues
yarn quality:fix

# Individual commands
yarn type-check    # TypeScript compilation check
yarn lint          # ESLint checking
yarn lint:fix      # ESLint auto-fix
yarn format        # Prettier formatting
yarn format:check  # Prettier format checking
yarn test:ci       # Run tests with coverage
```

## Monitoring and Maintenance

### Pipeline Health

- Monitor GitHub Actions for failures
- Review security audit reports regularly
- Keep dependencies updated

### Performance

- Monitor build times and optimize if needed
- Review test coverage trends
- Optimize bundle size regularly

### Security

- Regular dependency updates
- Security audit monitoring
- Secrets management review

## Troubleshooting

### Common Issues

**Linting Errors**

```bash
# Fix locally
yarn lint:fix
yarn format
```

**Type Errors**

```bash
# Check types
yarn type-check
```

**Test Failures**

```bash
# Run tests locally
yarn test
yarn test:coverage
```

**Deployment Issues**

- Check Firebase service account permissions
- Verify project configuration
- Review build logs in GitHub Actions

### Getting Help

1. Check the GitHub Actions logs for detailed error messages
2. Run commands locally to reproduce issues
3. Review this documentation for workflow clarification
4. Contact the development team for complex issues

## Security Considerations

- All secrets are stored in GitHub Secrets
- Firebase service account has minimal required permissions
- Branch protection prevents direct pushes to main
- All deployments require successful quality gates

## Future Improvements

- Add performance testing to pipeline
- Implement automated dependency updates
- Add more sophisticated deployment strategies (blue-green, canary)
- Enhanced monitoring and alerting
- Integration with issue tracking systems
