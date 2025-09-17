import React from 'react';
import { ArrowLeft, Shield, FileText, Calendar } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
}

export const Terms: React.FC<TermsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al Catálogo
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Términos de Servicio</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Términos de Servicio
          </h2>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Última actualización: 12 de septiembre de 2025
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Aceptación de Términos</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Al acceder y utilizar los servicios de desarrollo web de Mosley.mx, usted acepta estar sujeto a estos términos de servicio. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Descripción de Servicios</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Mosley.mx proporciona servicios de desarrollo web que incluyen:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Diseño y desarrollo de sitios web personalizados</li>
              <li>Hosting web gratuito de por vida</li>
              <li>Mantenimiento y soporte técnico</li>
              <li>Dominios y subdominios</li>
              <li>Funcionalidades de comercio electrónico</li>
              <li>Capacitación y consultoría</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Proceso de Desarrollo</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              El proceso de desarrollo incluye las siguientes etapas:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Consulta inicial y definición de requerimientos</li>
              <li>Propuesta y cotización del proyecto</li>
              <li>Pago inicial (50% del total del proyecto)</li>
              <li>Desarrollo y diseño del sitio web</li>
              <li>Revisión y ajustes por parte del cliente</li>
              <li>Pago final y entrega del proyecto</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Pagos y Facturación</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Los términos de pago son los siguientes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>50% de anticipo al iniciar el proyecto</li>
              <li>50% restante al completar y entregar el proyecto</li>
              <li>Los pagos pueden realizarse por transferencia bancaria, PayPal o tarjeta</li>
              <li>Los precios están en pesos mexicanos (MXN) y incluyen IVA</li>
              <li>No se reembolsan los pagos por servicios ya prestados</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Responsabilidades del Cliente</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              El cliente se compromete a:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Proporcionar todo el contenido necesario (textos, imágenes, videos) en tiempo y forma</li>
              <li>Revisar y aprobar los avances en los plazos establecidos</li>
              <li>Realizar los pagos según lo acordado</li>
              <li>No utilizar el sitio web para actividades ilegales o que violen derechos de terceros</li>
              <li>Mantener actualizada la información de contacto</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Propiedad Intelectual</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Una vez completado el pago total del proyecto, el cliente obtiene todos los derechos sobre el contenido y diseño del sitio web. Sin embargo, Mosley.mx conserva el derecho de mostrar el trabajo realizado en su portafolio y materiales promocionales.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Garantías y Soporte</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ofrecemos las siguientes garantías:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Hosting gratuito de por vida (sujeto a uso razonable)</li>
              <li>Soporte técnico gratuito por 3-6 meses según el plan contratado</li>
              <li>Corrección de errores de programación sin costo adicional</li>
              <li>Garantía de funcionamiento del 99.9% del tiempo</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Limitaciones de Responsabilidad</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mosley.mx no será responsable por daños indirectos, incidentales, especiales o consecuentes que puedan surgir del uso de nuestros servicios. Nuestra responsabilidad máxima se limita al monto total pagado por el cliente por los servicios.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Modificaciones de Términos</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Es responsabilidad del cliente revisar periódicamente estos términos.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">10. Ley Aplicable</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales competentes de Monterrey, Nuevo León, México.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">11. Contacto</h3>
            <p className="text-gray-600 leading-relaxed">
              Para preguntas sobre estos términos de servicio, puede contactarnos en:
              <br />
              <strong>Email:</strong> legal@mosley.mx
              <br />
              <strong>WhatsApp:</strong> +52 81 2506 0903
              <br />
              <strong>Dirección:</strong> Monterrey, Nuevo León, México
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <div className="flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <h4 className="text-lg font-medium text-gray-900">Protección Legal</h4>
              <p className="text-sm text-gray-600 mt-1">
                Estos términos están diseñados para proteger tanto a nuestros clientes como a nuestra empresa, 
                asegurando una relación comercial transparente y justa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
