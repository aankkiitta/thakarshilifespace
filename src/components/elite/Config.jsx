
import './Config.css';

const ROWS = [
  {
    config: '2 BHK Apartment with Balcony',
    area: '754 – 877 sq.ft.',
  },
  {
    config: '3.5 BHK Apartment with Balcony',
    area: '1,124 – 1,251 sq.ft.',
  },
  {
    config: 'Jodi Apartments',
    area: '1,736 sq.ft.',
  },
];

export default function Config({ onEnquire }) {
  return (
    <section className="elite-config" id="config">
      <div className="elite-config-bg"></div>
      <div className="elite-config-overlay"></div>

      <div className="elite-config-inner">
        <h2
          className="elite-config-title"
          data-reveal="up"
        >
          Apartment Configurations
        </h2>

        <div
          className="elite-config-divider"
          data-reveal="up"
        >
          <span className="elite-config-divider-icon">
            ◆
          </span>
        </div>

        <p
          className="elite-config-subtitle"
          data-reveal="up"
        >
          Discover a Home That Fits Your Lifestyle
        </p>

        <div
          className="elite-config-table-wrap"
          data-reveal="up"
        >
          <table className="elite-config-table">
            <thead>
              <tr>
                <th>Configuration</th>
                <th>Area (Sq. Ft.)</th>
                <th>Enquiry</th>
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row) => (
                <tr key={row.config}>
                  <td>{row.config}</td>
                  <td>{row.area}</td>
                  <td>
                    <button
                      className="elite-config-cta"
                      onClick={onEnquire}
                      type="button"
                    >
                      Enquire Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="elite-config-text"
          data-reveal="up"
        >
          <p>
            Elite Residences offers thoughtfully planned
            apartment configurations designed to complement
            modern lifestyles, with a focus on comfort,
            functionality and well-utilised living spaces.
          </p>

          <p>
            Whether you are searching for a comfortable
            family home or a more spacious residence,
            explore the available configurations and connect
            with our sales team for current pricing,
            availability and detailed floor plans.
          </p>
        </div>
      </div>
    </section>
  );
}
