import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div style={{ height: 'auto', width: '100%' }}>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
