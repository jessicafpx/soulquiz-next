import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};

      &[data-status="SUCCESS"] {
        background-color: #6bdfb8;
      }
      &[data-status="ERROR"] {
        background-color: #ff8983;
      }
    }
    &:focus {
      opacity: 1;
    }
  }
  button {
    margin-top: 12px;
  }
`;

export default AlternativesForm;
