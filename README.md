# Change-point-analysis-and-statistical-modelling

A Python package for change-point analysis and statistical modeling. This project provides tools and utilities for detecting change points in time series data, modeling data segments, and evaluating statistical properties. It is structured for extensibility and reproducible research.

## Project Structure

```
├── src/                # Core source code
│   ├── core/           # Core algorithms and logic
│   ├── models/         # Statistical models
│   ├── services/       # Service layer (APIs, orchestration)
│   └── utils/          # Utility functions
├── notebooks/          # Jupyter notebooks for experiments and analysis
├── examples/           # Example scripts and usage demos
├── tests/              # Test suite
│   ├── integration/    # Integration tests
│   └── unit/           # Unit tests
├── data/               # Data storage
│   ├── raw/            # Raw data
│   └── processed/      # Processed data
├── scripts/            # Helper and automation scripts
├── docs/               # Documentation
├── config/             # Configuration files
├── requirements.txt    # Python dependencies
├── pyproject.toml      # Build system configuration
├── Makefile            # Automation commands
└── .env                # Environment variables
```

## Installation

```bash
pip install -r requirements.txt
```

## Usage

You can start by running or adapting the example scripts in the `examples/` directory or by exploring the Jupyter notebooks in the `notebooks/` directory. To use the core library in your own code:

```python
from src.core import ...  # Import core algorithms
from src.models import ...  # Import statistical models
```

## Testing

To run the test suite:

```bash
pytest tests/
```

## Data

- Place raw data in `data/raw/`.
- Processed data should go in `data/processed/`.

## Documentation

See the `docs/` directory for detailed documentation and usage guides.

---

For more information, please refer to the individual module README files or contact the maintainers.
