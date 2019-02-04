import * as React from 'react';
import Modal from "react-responsive-modal";

export class QuizSummaryDecription extends React.Component {
    state = {
        open: false,
    };

    handleModalOpen = () => {
        this.setState({open: true});
    };

    handleModalClose = () => {
        this.setState({open: false});
    };

    render() {
        const {title, content, img} = this.props;
        const {open} = this.state;

        return (
            <div>
                <button
                    className="tm-button-details uk-button uk-button-default uk-width-auto@s"
                    onClick={this.handleModalOpen}>
                    Подробнее
                </button>
                <Modal open={open} onClose={this.handleModalClose}>
                    <div className="tm-final">
                        <div className="uk-width-2-3@s uk-margin-auto uk-text-center">
                            <div className="img-wrapper">
                                <img src={img} width={228} height={228} alt=""/>
                            </div>
                            <h2 className="uk-modal-title uk-margin-top">{title}</h2>
                            <div
                                className="uk-margin-large-bottom tm-text-transparent"
                                dangerouslySetInnerHTML={{__html: content}}>
                            </div>
                            <button
                                className="uk-modal-close uk-button uk-button-primary"
                                onClick={this.handleModalClose}>
                                Закрыть
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
