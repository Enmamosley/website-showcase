import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Calendar, Database } from 'lucide-react';

interface PrivacyProps {
  onBack: () => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
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
            <h1 className="text-xl font-semibold text-gray-900">Política de Privacidad</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h2>
          <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Última actualización: 12 de septiembre de 2025
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Mosley.mx, respetamos tu privacidad y nos comprometemos a proteger tu información personal. 
            Esta política describe cómo recopilamos, usamos y protegemos tus datos.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Datos Mínimos</h3>
            <p className="text-gray-600 text-sm">Solo recopilamos la información necesaria para brindarte nuestros servicios.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguridad Total</h3>
            <p className="text-gray-600 text-sm">Utilizamos encriptación y medidas de seguridad avanzadas.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparencia</h3>
            <p className="text-gray-600 text-sm">Siempre sabrás qué información tenemos y cómo la usamos.</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Recopilamos información que nos proporcionas directamente y algunos datos de uso automáticamente:
            </p>
            
            <h4 className="text-lg font-medium text-gray-900 mb-3">Información Personal:</h4>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información de la empresa (si aplica)</li>
              <li>Detalles del proyecto y requerimientos</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-900 mb-3">Información Técnica:</h4>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Dirección IP</li>
              <li>Tipo de navegador y versión</li>
              <li>Páginas visitadas en nuestro sitio</li>
              <li>Tiempo de permanencia</li>
              <li>Referencia de origen</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Cómo Utilizamos tu Información</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Utilizamos tu información personal para los siguientes propósitos:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Proporcionar nuestros servicios de desarrollo web</li>
              <li>Comunicarnos contigo sobre tu proyecto</li>
              <li>Procesar pagos y generar facturas</li>
              <li>Brindar soporte técnico</li>
              <li>Mejorar nuestros servicios</li>
              <li>Enviar actualizaciones importantes (con tu consentimiento)</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Compartir Información</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>No vendemos, alquilamos ni compartimos tu información personal con terceros</strong> para fines comerciales. 
              Solo compartimos información en los siguientes casos:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Con proveedores de servicios necesarios (hosting, pagos) bajo estrictos acuerdos de confidencialidad</li>
              <li>Cuando sea requerido por ley o autoridades competentes</li>
              <li>Para proteger nuestros derechos, propiedad o seguridad</li>
              <li>Con tu consentimiento explícito</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Seguridad de los Datos</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizacionales para proteger tu información:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Encriptación SSL/TLS para todas las comunicaciones</li>
              <li>Almacenamiento seguro en servidores protegidos</li>
              <li>Acceso limitado solo al personal autorizado</li>
              <li>Copias de seguridad regulares y seguras</li>
              <li>Monitoreo continuo de seguridad</li>
              <li>Actualizaciones regulares de sistemas de seguridad</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Retención de Datos</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política. 
              Los datos del proyecto se conservan durante 3 años después de la finalización del servicio para efectos de soporte y garantía.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Tus Derechos</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Tienes los siguientes derechos sobre tu información personal:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Acceso:</strong> Solicitar una copia de los datos que tenemos sobre ti</li>
              <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos (sujeto a obligaciones legales)</li>
              <li><strong>Portabilidad:</strong> Obtener tus datos en un formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos para ciertos fines</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del procesamiento</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies y Tecnologías Similares</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Utilizamos cookies esenciales para el funcionamiento del sitio web y cookies analíticas para mejorar tu experiencia. 
              Puedes controlar las cookies a través de la configuración de tu navegador. Las cookies esenciales son necesarias para el funcionamiento básico del sitio.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Cambios en esta Política</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos por correo electrónico 
              o a través de un aviso prominente en nuestro sitio web. La fecha de la última actualización se indica en la parte superior de esta política.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Contacto y Consultas</h3>
            <p className="text-gray-600 leading-relaxed">
              Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, contáctanos:
              <br /><br />
              <strong>Email:</strong> privacidad@mosley.mx
              <br />
              <strong>WhatsApp:</strong> +52 81 2259 0296
              <br />
              <strong>Dirección:</strong> Monterrey, Nuevo León, México
              <br /><br />
              Responderemos a tu consulta dentro de 30 días hábiles.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 bg-green-50 rounded-lg p-6">
          <div className="flex items-center">
            <Shield className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <h4 className="text-lg font-medium text-gray-900">Compromiso con tu Privacidad</h4>
              <p className="text-sm text-gray-600 mt-1">
                Tu confianza es fundamental para nosotros. Nos comprometemos a proteger tu información personal 
                con los más altos estándares de seguridad y transparencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
